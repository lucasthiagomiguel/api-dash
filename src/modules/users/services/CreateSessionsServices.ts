import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { getCustomRepository } from 'typeorm';
import { Users } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';


interface IRequest {
  email: string;
  senha: string;
}
interface IResponse{
    user: Users;
    token: string
}

class CreateSessionService {
  public async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('Email incorreto.', 401);
    }

    const senhaConfirmada = await compare(senha,user.senha);

    if(!senhaConfirmada){
        throw new AppError('dados incorreto.', 401);
    }

    const token = sign({}, authConfig.jwt.secret, { 
        expiresIn:authConfig.jwt.expiresIn
    });
      
    return {
        user,
        token
    };
  }
}

export default CreateSessionService;