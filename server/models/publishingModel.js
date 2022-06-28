const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const PublishingType = sequelize.define("publishing_type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const PublishingCharacteristicsAssoc = sequelize.define("publishing_characteristics_assoc", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false}
})

const PublishingTypeCharacteristics = sequelize.define("publishing_type_characteristics", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

PublishingTypeCharacteristics.hasMany(PublishingCharacteristicsAssoc)
PublishingCharacteristicsAssoc.belongsTo(PublishingTypeCharacteristics)

PublishingType.hasMany(PublishingCharacteristicsAssoc)
PublishingCharacteristicsAssoc.belongsTo(PublishingType)

module.exports = { PublishingType, PublishingTypeCharacteristics, PublishingCharacteristicsAssoc }