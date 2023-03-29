const { Sequelize, DataTypes } = require("sequelize");

class Client extends Model {
    
}

Client.init({
    client_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    client_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client_bday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    client_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client_login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client_phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client_address: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize,
    modelName: "client"
});