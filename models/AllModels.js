//const sequelize = require('../db')
const {DataTypes} = require('sequelize')

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

Client.hasMany(Donation)
Donation.belongsTo(Client)

Client.hasMany(Request)
Request.belongsTo(Client)

Pet.hasMany(Request)
Request.belongsTo(Pet)


module.exports = {
    Admin,
    Client,
    Donation,
    Pet,
    Request,
}