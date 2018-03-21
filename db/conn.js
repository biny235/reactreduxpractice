const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/acmeusersproducts', 
  'postgres', 
  'admin',
  {
    dialect: 'postgres'
  }
);

module.exports = conn;