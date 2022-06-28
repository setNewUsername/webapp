const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const ProductPublisher = sequelize.define("product_publisher", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = ProductPublisher
