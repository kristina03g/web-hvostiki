module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("admin", {
        admin_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        admin_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin_reg_date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Admin
}