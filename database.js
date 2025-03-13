const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'presente_ideal.sqlite' // Nome do arquivo do banco de dados
});

module.exports = sequelize;