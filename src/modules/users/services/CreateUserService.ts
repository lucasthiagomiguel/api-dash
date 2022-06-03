import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { Users } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';


interface IRequest {
  name: string;
  email: string;
  telefone: string;
  senha: string;
  ativo: number
}

class CreateUserService {
  public async execute({ name, email,telefone, senha }: IRequest): Promise<Users> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if(emailExists){
      throw new AppError('Email address already used.');
    }

    const hashPassword = await hash(senha,8);
    const user = usersRepository.create({
      name, 
      email, 
      telefone,
      senha: hashPassword, 
      ativo: 1
    })

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;