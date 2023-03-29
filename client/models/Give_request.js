const { Sequelize } = require("sequelize");

class Give_request extends Model {
    
}

Give_request.init({
    gv_request_id: {
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
    purpose: {
        type: Sequelize.STRING,
        allowNull: true
    },
    gv_request_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize,
    modelName: "give_request"
});