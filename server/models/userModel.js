const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user", {
    timestamps: false,
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    balance: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1000},
    password: {type: DataTypes.STRING, allowNull: false},
    access_rights: {type: DataTypes.STRING, defaultValue: "USER"},
})

module.exports = { User }