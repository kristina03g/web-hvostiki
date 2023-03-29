const { Sequelize } = require("sequelize");

class Admin extends Model {
    
}

Admin.init({
    admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    admin_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin_login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin_password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    admin_phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize,
    modelName: "admin"
});
