# Blog Fiap
Trabalho desenvolvido para a disciplina de Front-end Engineering & UX da Fiap

## Execução do projeto em modo de desenvolvimento
- Para executar o projeto é necessário ter o NodeJS e o git instalado na máquina
- Clone o repositório com o comando `git clone git@github.com:flipggs/fiap-blog.git`
- Acesse a pasta do repositório e instale as dependencias com `npm install`
- Para executar o projeto é necessário criar um arquivo na raiz do projeto com o nome `.env.local` e incluir os valores das seguintes variáveis:
```
NEXT_PUBLIC_SPACE_ID=
NEXT_PUBLIC_ACCESS_TOKEN=
```
- Após preencher as variáveis execute o projeto com o comando `npm run dev` e acessar a porta 3000 no navegador http://localhost:3000

## Execução do projeto em modo de produção
- Para executar o projeto em modo de produção pasta seguir os mesmos passos do item anterior substituindo apenas o último comando por `npm run build` e em seguida `npm run start` para abrir o projeto na porta 3000