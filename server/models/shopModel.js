const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const Shops = sequelize.define("publishing_type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    activation_key: {type: DataTypes.STRING, unique: true}
})

module.exports = { Shops }