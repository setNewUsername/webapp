const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    multiplayer: {type: DataTypes.BOOLEAN, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
})

const ProductSystemCharactDescription = sequelize.define("product_sys_char_desc", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    minimal_characteristics: {type: DataTypes.STRING, allowNull: false},
    recommended_characteristics: {type: DataTypes.STRING, allowNull: false},
})

const ProductSystemRequirements = sequelize.define("product_system_requirements", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

module.exports = Product, ProductSystemCharactDescription, ProductSystemRequirements