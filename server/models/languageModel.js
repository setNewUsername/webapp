const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const LanguageAssociation = sequelize.define("language_association", {
    timestamps: false,
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Language = sequelize.define("language",{
    timestamps: false,
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

Language.hasMany(LanguageAssociation)
LanguageAssociation.belongsTo(Language)

module.exports = { LanguageAssociation, Language }