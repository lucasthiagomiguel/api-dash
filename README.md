# api-rest
para rodar o projete, tenha instalado o node js
depois de instalado acessa a raiz do projeto e roda o comando npm install 
depois serifique que esteja rodando mysql em seu sistema
apos sertificar que esta rodando o mysql, na raiz do projeto no arquivo ormconfig inclua as configuraçoes, e monte uma database como  nome que deseja e inclua no arquivo
apos inserir os dados roda os migrations para criar as tabelas 
npm typeorm migration:run
e por fim para rodar o projeto
npm run dev
vai rodar o projeto em localhost na port:3333
