const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const ProductGenre = sequelize.define("product_genre", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = { ProductGenre }