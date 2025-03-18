// Importa o PrismaClient do pacote @prisma/client, que será utilizado para interagir com o banco de dados
const { PrismaClient } = require("@prisma/client");
// Cria uma instância do PrismaClient para interagir com o banco de dados
const prisma = new PrismaClient();

// Função para selecionar todos os clientes da tabela 'clientes'
async function selectCustomers() {
  // Utiliza o Prisma para buscar todos os registros da tabela 'clientes'
  const customers = await prisma.clientes.findMany();
  // Retorna todos os clientes encontrados
  return customers;
}

// Função para selecionar um cliente específico baseado no 'id'
async function selectCustomer(id) {
  // Utiliza o Prisma para buscar um cliente único da tabela 'clientes' com o id fornecido
  const customer = await prisma.clientes.findUnique({
    where: { id: parseInt(id) }, // 'id' é convertido para número (caso venha como string)
  });
  // Retorna o cliente encontrado
  return customer;
}

// Função para inserir um novo cliente na tabela 'clientes'
async function insertCustomer(customer) {
  // Utiliza o Prisma para inserir um novo registro na tabela 'clientes'
  const newCustomer = await prisma.clientes.create({
    data: {
      // Dados a serem inseridos no novo cliente
      name: customer.name, // Nome do cliente
      age: customer.age, // Idade do cliente
    },
  });
  // Retorna o cliente recém-criado
  return newCustomer;
}

// Função para atualizar os dados de um cliente existente com base no 'id'
async function updateCustomer(id, customer) {
  // Utiliza o Prisma para atualizar os dados de um cliente específico na tabela 'clientes'
  const updatedCustomer = await prisma.clientes.update({
    where: { id: parseInt(id) }, // 'id' é convertido para número (caso venha como string)
    data: {
      // Dados a serem atualizados para o cliente
      name: customer.name, // Novo nome do cliente
      age: customer.age, // Nova idade do cliente
    },
  });
  // Retorna o cliente atualizado
  return updatedCustomer;
}

// Função para deletar um cliente baseado no 'id'
async function deleteCustomer(id) {
  // Utiliza o Prisma para excluir um cliente da tabela 'clientes' baseado no 'id'
  const deletedCustomer = await prisma.clientes.delete({
    where: { id: parseInt(id) }, // 'id' é convertido para número (caso venha como string)
  });
  // Retorna o cliente que foi excluído
  return deletedCustomer;
}

// Exporta as funções para que possam ser utilizadas em outros arquivos
module.exports = {
  selectCustomers, // Função para selecionar todos os clientes
  selectCustomer, // Função para selecionar um cliente por id
  insertCustomer, // Função para inserir um novo cliente
  updateCustomer, // Função para atualizar um cliente existente
  deleteCustomer, // Função para deletar um cliente por id
};
