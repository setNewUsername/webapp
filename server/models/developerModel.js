const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const ProductDeveloper = sequelize.define("product_developer", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = { ProductDeveloper }