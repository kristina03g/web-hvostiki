const { Sequelize } = require("sequelize");

class Donation extends Model {
    
}

Donation.init({
    donation_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    purpose: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, { sequelize,
    modelName: "donation"
});