module.exports = (sequelize, DataTypes) => {

    const Donation = sequelize.define("donation", {
        donation_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        dnt_client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: true
        },
        donation_date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    Donation.associate = function(models) {
        Donation.belongsTo(models.client, {foreignKey: 'dnt_client_id'});
    };
    return Donation
}