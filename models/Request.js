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
        req_client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        req_pet_id: {
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
    Request.associate = function(models) {
        Request.belongsTo(models.client, {foreignKey: 'req_client_id'});
        Request.belongsTo(models.pet, {foreignKey: 'req_pet_id'});
    };
    return Request
}