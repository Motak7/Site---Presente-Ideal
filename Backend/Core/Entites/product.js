const { DataTypes } = require('sequelize');
const sequelize = require('./database'); // Importe a instância do Sequelize

const Produto = sequelize.define('Produto', {
  nome: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  preco: { type: DataTypes.FLOAT }
});

module.exports = Produto;