const User = require("./userModel")
const Basket = require("./basketModel")
const Genre = require("./genreModel")
const Publisher = require("./publisherModel")
const Developer = require("./developerModel")
const Platform = require("./platformModel")
const Language = require("./languageModel")
const Publishing = require("./publishingModel")
const Product = require("./productModel")
const SystemReq = require("./systemRequrementsModel")

//user relation to basket
User.User.hasOne(Basket.Basket)
Basket.Basket.belongsTo(User.User)

//basket association relation to product
Product.Product.hasMany(Basket.BasketAssoc)
Basket.BasketAssoc.belongsTo(Product.Product)

//system requirements relation to product
Product.Product.hasMany(SystemReq.ProductSystemRequirements)
SystemReq.ProductSystemRequirements.belongsTo(Product.Product)

//genre relation to product
Genre.ProductGenre.hasMany(Product.Product)
Product.Product.belongsTo(Genre.ProductGenre)

//developer relation to product
Developer.ProductDeveloper.hasMany(Product.Product)
Product.Product.belongsTo(Developer.ProductDeveloper)

//publisher relation to product
Publisher.ProductPublisher.hasMany(Product.Product)
Product.Product.belongsTo(Publisher.ProductPublisher)

//publishing type relation to product
Product.Product.hasMany(Publishing.PublishingType)
Publishing.PublishingType.belongsTo(Product.Product)

//language assoc relation to product
Product.Product.hasMany(Language.LanguageAssociation)
Language.LanguageAssociation.belongsTo(Product.Product)

//platform relation to product
Platform.PlatformCharacteristicsAssoc.hasMany(SystemReq.ProductSystemCharactDescription)
SystemReq.ProductSystemCharactDescription.belongsTo(Platform.PlatformCharacteristicsAssoc)

//platform assoc relation to product
Product.Product.hasMany(Platform.PlatformAssociation)
Platform.PlatformAssociation.belongsTo(Product.Product)

//system requirements relation to platform characteristics
Platform.PlatformCharacteristicsAssoc.hasMany(SystemReq.ProductSystemCharactDescription)
SystemReq.ProductSystemCharactDescription.belongsTo(Platform.PlatformCharacteristicsAssoc)

module.exports = { User, Basket, Genre, Publisher, Developer, Platform, Language, Publishing, Product, SystemReq }