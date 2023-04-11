module.exports = (sequelize, DataTypes) => {

    const Pet = sequelize.define("pet", {
        pet_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_photo: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_age: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        pet_illness: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pet_status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Pet
}
  