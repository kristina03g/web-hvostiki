const dbConfig = require('../config/dbConfig.js');

const fs = require('fs');
const path = require('path');
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

db.admins = require('./Admin.js')(sequelize, DataTypes)
db.clients = require('./Client.js')(sequelize, DataTypes)
db.donations = require('./Donation.js')(sequelize, DataTypes)
db.pets = require('./Pet.js')(sequelize, DataTypes)
db.requests = require('./Request.js')(sequelize, DataTypes)

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "AllModels.js");
  })
  .forEach(function(file) {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize
db.sequelize = sequelize

//db.models = require('./AllModels.js')

db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db