const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    multiplayer: {type: DataTypes.BOOLEAN, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    amount: {type: DataTypes.INTEGER, allowNull: false},
    youtube: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING, allowNull: false},
})

module.exports = { Product }