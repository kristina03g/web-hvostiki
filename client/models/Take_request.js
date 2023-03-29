const { Sequelize } = require("sequelize");

class Take_request extends Model {
    
}

Take_request.init({
    tk_request_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pet_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tk_request_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize,
    modelName: "take_request"
});