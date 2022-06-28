const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const LanguageAssociation = sequelize.define("language_association", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Language = sequelize.define("language",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = LanguageAssociation, Language