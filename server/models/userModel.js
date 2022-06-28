const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    access_rights: {type: DataTypes.STRING, defaultValue: "USER"},
})

module.exports = User