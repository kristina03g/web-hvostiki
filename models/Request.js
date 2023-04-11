module.exports = (sequelize, DataTypes) => {

    const Request = sequelize.define("request", {
        request_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        request_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pet_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: true
        },
        request_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        request_date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Request
}