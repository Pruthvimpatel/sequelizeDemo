const Sequelize = require('sequelize');

const sequelize = new Sequelize('product', 'postgres', 'root', {
  dialect: 'postgres',
  host: 'localhost',
  logging: false
});

module.exports = sequelize;
