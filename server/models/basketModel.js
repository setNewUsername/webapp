const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketAssoc = sequelize.define("basket_assoc", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

module.exports = BasketAssoc, Basket