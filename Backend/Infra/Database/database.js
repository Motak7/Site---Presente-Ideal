const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_presente_ideal', 'root@localhost', 'M99685rt', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;