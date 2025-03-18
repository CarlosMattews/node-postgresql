require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

// Middleware para permitir o parsing de requisições JSON
app.use(express.json());

// Rota principal para testar o servidor
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Rota para obter um cliente específico com base no 'id'
app.get("/clientes/:id", async (req, res) => {
  const cliente = await db.selectCustomer(req.params.id);
  res.json(cliente);
});

// Rota para obter todos os clientes
app.get("/clientes", async (req, res) => {
  const clientes = await db.selectCustomers();
  res.json(clientes);
});

// Rota para adicionar um novo cliente
app.post("/clientes", async (req, res) => {
  const cliente = req.body;
  await db.insertCustomer(cliente);
  res.sendStatus(201);
});

// Rota para atualizar os dados de um cliente específico com base no 'id'
app.patch("/clientes/:id", async (req, res) => {
  const cliente = req.body;
  await db.updateCustomer(req.params.id, cliente);
  res.sendStatus(200);
});

// Rota para deletar um cliente específico com base no 'id'
app.delete("/clientes/:id", async (req, res) => {
  await db.deleteCustomer(req.params.id);
  res.sendStatus(204);
});

// Inicializa o servidor na porta especificada
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
