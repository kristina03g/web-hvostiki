const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
);

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.admins = require('./Admin.js')(sequelize, DataTypes)
db.clients = require('./Client.js')(sequelize, DataTypes)
db.donations = require('./Donation.js')(sequelize, DataTypes)
db.pets = require('./Pet.js')(sequelize, DataTypes)
db.requests = require('./Request.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db