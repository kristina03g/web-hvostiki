const dbConfig = require('./config/dbConfig.js');

const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0
    }
)