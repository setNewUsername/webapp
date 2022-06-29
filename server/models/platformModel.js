const sequelize = require("../dbConnection")
const {DataTypes} = require("sequelize")

const PlatformCharacteristics = sequelize.define("platform_characteristics", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const PlatformSystemRequirements = sequelize.define("platform_system_requirements", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    minimal_char: {type: DataTypes.STRING},
    recommended_char: {type: DataTypes.STRING}
})

module.exports = { PlatformCharacteristics, PlatformSystemRequirements }