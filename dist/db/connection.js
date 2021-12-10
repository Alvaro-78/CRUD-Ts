'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Sequelize } = require('sequelize');
const dbConfig = require('../../config/config')['development'];
// const db = new Sequelize('TS-CRUD', 'root', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// });
const db = new Sequelize(dbConfig.DB, dbConfig.USER, {
	host: dbConfig.HOST,
	dialect: dbConfig.DIALECT,
});
exports.default = db;
//# sourceMappingURL=connection.js.map
