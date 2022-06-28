const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const PublishingType = sequelize.define("publishing_type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const PublishingTypeName = sequelize.define("publishing_type_name", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, validate: {isIn: [['collection', 'box', 'key']]}},
})

PublishingTypeName.hasMany(PublishingType)
PublishingType.belongsTo(PublishingTypeName)

module.exports = { PublishingType, PublishingTypeName }