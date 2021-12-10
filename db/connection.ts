const { Sequelize } = require('sequelize');
const dbConfig = require('../config/config.js')['development'];
// const db = new Sequelize('TS-CRUD', 'root', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// });

const db = new Sequelize(dbConfig.DB, dbConfig.USER, {
	host: dbConfig.HOST,
	dialect: dbConfig.DIALECT,
});

export default db;
