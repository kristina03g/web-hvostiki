const { Sequelize } = require("sequelize");

class Pet extends Model {
    
}

Pet.init({
    pet_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    pet_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pet_breed: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pet_age: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    pet_illness: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pet_status: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize,
    modelName: "pet"
});
  