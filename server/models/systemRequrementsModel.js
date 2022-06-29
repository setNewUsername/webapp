const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const ProductSystemCharactDescription = sequelize.define("product_sys_char_desc", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    minimal_characteristics: {type: DataTypes.STRING, allowNull: false},
    recommended_characteristics: {type: DataTypes.STRING, allowNull: false},
})

const ProductSystemRequirements = sequelize.define("product_system_requirements", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

ProductSystemRequirements.hasOne(ProductSystemCharactDescription)
ProductSystemCharactDescription.belongsTo(ProductSystemRequirements)

module.exports = { ProductSystemCharactDescription, ProductSystemRequirements }