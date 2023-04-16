module.exports = (sequelize, DataTypes) => {

    const Client = sequelize.define("client", {
        client_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_bday: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        client_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        client_reg_date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    Client.associate = function(models) {
        Client.hasMany(models.donation, {foreignKey: 'dnt_client_id', sourceKey: 'client_id'});
        Client.hasMany(models.request, {foreignKey: 'req_client_id', sourceKey: 'client_id'});
    };
    return Client
}