const { DataTypes } = require('sequelize');
const sequelize = require('./database'); // Importe a instância do Sequelize

const Reserva = sequelize.define('Reserva', {
  data_reserva: { type: DataTypes.DATE },
  status: { type: DataTypes.STRING }
});

module.exports = Reserva;