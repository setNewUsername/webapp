const User = require("./userModel")
const Basket = require("./basketModel")
const Genre = require("./genreModel")
const Publisher = require("./publisherModel")
const Developer = require("./developerModel")
const Platform = require("./platformModel")
const Language = require("./languageModel")
const Product = require("./productModel")
const Shop = require("./shopModel")

//user relation to basket
User.User.hasOne(Basket.Basket)
Basket.Basket.belongsTo(User.User)

//basket association relation to product
Product.Product.hasMany(Basket.BasketAssoc)
Basket.BasketAssoc.belongsTo(Product.Product)

//genre relation to product
Genre.ProductGenre.hasMany(Product.Product)
Product.Product.belongsTo(Genre.ProductGenre)

//developer relation to product
Developer.ProductDeveloper.hasMany(Product.Product)
Product.Product.belongsTo(Developer.ProductDeveloper)

//publisher relation to product
Publisher.ProductPublisher.hasMany(Product.Product)
Product.Product.belongsTo(Publisher.ProductPublisher)

//language assoc relation to product
Product.Product.hasMany(Language.LanguageAssociation)
Language.LanguageAssociation.belongsTo(Product.Product)

//shop
Product.Product.hasMany(Shop.Shops)
Shop.Shops.belongsTo(Product.Product)

Product.Product.hasMany(Platform.PlatformSystemRequirements)
Platform.PlatformSystemRequirements.belongsTo(Product.Product)

Platform.PlatformCharacteristics.hasMany(Platform.PlatformSystemRequirements)
Platform.PlatformSystemRequirements.belongsTo(Platform.PlatformCharacteristics)

module.exports = { User, Basket, Genre, Publisher, Developer, Platform, Language, Product, Shop }