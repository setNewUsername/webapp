const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const PublishingInfo = sequelize.define("publishing_info", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const PublishingCharacteristicsAssoc = sequelize.define("pub_characteristics_assoc", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false}
})

const PublishingTypeCharacteristics = sequelize.define("publishing_type_characteristics", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

module.exports = PublishingInfo, PublishingTypeCharacteristics, PublishingCharacteristicsAssoc