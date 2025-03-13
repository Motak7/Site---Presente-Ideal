const sequelize = require('./database');
const Usuario = require('./usuario');
const Produto = require('./produto');
const Reserva = require('./reserva');

// Definindo relacionamentos
Usuario.hasMany(Reserva);
Reserva.belongsTo(Usuario);

Produto.hasMany(Reserva);
Reserva.belongsTo(Produto);

// Sincronizando os modelos com o banco de dados
sequelize.sync({ force: true })
  .then(() => console.log("Banco de dados sincronizado"))
  .catch(err => console.error("Erro ao sincronizar:", err));

module.exports = {
  Usuario,
  Produto,
  Reserva,
  sequelize
};