# API de Clientes - Node.js, PostgreSQL e Prisma

Este é um projeto backend que fornece uma API RESTful para gerenciar clientes em um banco de dados PostgreSQL. Usando **Node.js**, **Express** e **Prisma**, a aplicação permite realizar operações CRUD (Criar, Ler, Atualizar, Deletar) para os dados de clientes.

## Funcionalidades

- **GET /clientes**: Retorna todos os clientes cadastrados.
- **GET /clientes/:id**: Retorna um cliente específico por ID.
- **POST /clientes**: Adiciona um novo cliente.
- **PATCH /clientes/:id**: Atualiza um cliente existente.
- **DELETE /clientes/:id**: Deleta um cliente pelo ID.

## Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

2. Instale as dependências
npm install

3. Configure o banco de dados
Crie um banco de dados PostgreSQL e configure a string de conexão no arquivo .env:

PORT=3000
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco

4. Inicie o servidor

npm start

O servidor estará disponível em http://localhost:3000.

Teste a API

Você pode usar ferramentas como Postman ou Insomnia para testar a API.
```
