const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const PlatformAssociation = sequelize.define("platform_association", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Platform = sequelize.define("platform",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const PlatformCharacteristics = sequelize.define("platform_characteristics", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const PlatformCharacteristicsAssoc = sequelize.define("platform_char_assoc", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Platform.hasMany(PlatformAssociation)
PlatformAssociation.belongsTo(Platform)

Platform.hasMany(PlatformCharacteristicsAssoc)
PlatformCharacteristicsAssoc.belongsTo(Platform)

PlatformCharacteristics.hasMany(PlatformCharacteristicsAssoc)
PlatformCharacteristicsAssoc.belongsTo(PlatformCharacteristics)

module.exports = { PlatformAssociation, Platform, PlatformCharacteristics, PlatformCharacteristicsAssoc }