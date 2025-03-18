require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/clientes/:id", async (req, res) => {
  const cliente = await db.selectCustomer(req.params.id);
  res.json(cliente);
});
app.get("/clientes", async (req, res) => {
  const clientes = await db.selectCustomers();
  res.json(clientes);
});

app.post("/clientes", async (req, res) => {
  const cliente = req.body;
  await db.insertCustomer(cliente);
  res.sendStatus(201);
});

app.patch("/clientes/:id", async (req, res) => {
  const cliente = req.body;
  await db.updateCustomer(req.params.id, cliente);
  res.sendStatus(200);
});
app.delete("/clientes/:id", async (req, res) => {
  await db.deleteCustomer(req.params.id);
  res.sendStatus(204);
});

app.listen(port);

console.log(`Server is running on port ${port}`);
