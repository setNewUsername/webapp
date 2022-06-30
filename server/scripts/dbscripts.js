const Models = require("../models/models")

const FillProductDev = () =>{
    let Developers = ['Naughty Dog', 'Capcom', 'Bethesda', 'Infinity World', 'Nintendo', 'Blizzard', 'Valve ', 'Electronic Arts', 'RockStar Games', 'Ubisoft']

    Developers.forEach(devName => {
        Models.Developer.ProductDeveloper.create({name: devName});
    });
}

const FillProductPublishers = () => {
    let Publishers = ['Absolute Entertainment', 'Acclaim Entertainment', 'Accolade', 'Activision', 'Activision Blizzard']

    Publishers.forEach(pubName => {
        Models.Publisher.ProductPublisher.create({name: pubName});
    });
}

const FillProductLanguages = () => {
    let Languages = ['Russian', 'English', 'French', 'Spanish', 'Italian', 'Chinese', 'Ukranian', 'German']

    Languages.forEach(langName => {
        Models.Language.Language.create({name: langName})
    });
}

const FillProductGenres = () => {
    let Genres = ['Action', 'RPG', 'Adventure', 'FPS', 'Fantasy', 'Sandbox']

    Genres.forEach(genName => {
        Models.Genre.ProductGenre.create({name:genName})
    });
}

const FillUsers = () => {
    for(let i = 0; i < 15; i++)
    {
        let email = "test_user_" + i + "@mail.com"
        let balance = 1000 * i
        let password = 'test_user_' + i
        let access_rights = 'USER'

        Models.User.User.create({email, balance, password, access_rights});
    }
    for(let i = 0; i < 5; i++){
        let email = "test_admin_" + i + "@mail.com"
        let balance = 100000
        let password = 'test_admin_' + i
        let access_rights = 'ADMIN'

        Models.User.User.create({email, balance, password, access_rights});
    }
}

async function GetGenres (){
    return await Models.Genre.ProductGenre.findAll()
}

async function GetPub (){
    return await Models.Publisher.ProductPublisher.findAll()
}

async function GetDev (){
    return await Models.Developer.ProductDeveloper.findAll()
}

async function GetProduct(){
    let products = await Models.Product.Product.findAll()
    let Ids = []
    products.forEach(prod => {
        Ids.push(prod.id)
    });
    return Ids
}

async function GetPlatformChars(){
    let platformChars = await Models.Platform.PlatformCharacteristics.findAll()
    let Ids = []
    platformChars.forEach(plat => {
        Ids.push(plat.id)
    });
    return Ids
}

async function GetLangIds(){
    let Langs = await Models.Language.Language.findAll()
    let Ids = []
    Langs.forEach(lang => {
        Ids.push(lang.id)
    });
    return Ids
}

async function GetUsersIds(){
    let Users = await Models.User.User.findAll()
    let Ids = []
    Users.forEach(user => {
        Ids.push(user.id)
    });
    return Ids
}

async function FillProducts () {
    let ProductNames = ['Call of Duty', 'Portal', 'Portal 2', 'Counter Strike: Global Offensive', 'Counter Strice 1.6', 'Warface', 'S.T.A.L.K.E.R Clear Sky']

    for (let i = 0; i < ProductNames.length; i++) {
        let multiplayer = ((Math.random()*100) >= 50)
        let price = Math.round(500 + Math.random() * 2000)
        let image = "image_" + ProductNames[i] + ".jpg"
        let productGenreId = await GetGenres().then(value=>{return value[Math.floor(Math.random() * value.length)].id})
        let productDeveloperId = await  GetDev().then(value=>{return value[Math.floor(Math.random() * value.length)].id})
        let productPublisherId = await GetPub().then(value=>{return value[Math.floor(Math.random() * value.length)].id})
        let amount = 10 * i
        let youtube = "youtube_" + ProductNames[i]

        Models.Product.Product.create({name:ProductNames[i], multiplayer, price, image, productGenreId, productDeveloperId, productPublisherId, amount, youtube})
    }
}

async function FillSystemRequrements(){

    let minReq = ['rx560', 'i3-10100f', '7', '30', '4']
    let RecReq = ['rx580', 'i5-10400f', '10', '50', '8']

    let ProductIds = await GetProduct()
    let PlatformCharsId = await GetPlatformChars()
    
    ProductIds.forEach(prodId => {
        PlatformCharsId.forEach(charId => {
            Models.Platform.PlatformSystemRequirements.create({minimal_char:minReq[charId-1], recommended_char:RecReq[charId-1], productId:prodId, platformCharacteristicId:charId})
        });
    });
}

async function FillLangAssoc(){
    let LangIds = await GetLangIds()
    let ProductIds = await GetProduct()

    ProductIds.forEach(prodId => {
        LangIds.forEach(langId => {
            Models.Language.LanguageAssociation.create({languageId:langId, productId:prodId})
        });
    });
}

async function CreateBaskets(){
    let UsersIds = await GetUsersIds()

    UsersIds.forEach(userId => {
        Models.Basket.Basket.create({userId: userId})
    });
}

async function FillSystemChars()
{
    let Chars = ['GPU', 'CPU', 'Windows', 'Disk space', 'RAM']

    Chars.forEach(char => {
        Models.Platform.PlatformCharacteristics.create({name:char})
    });
}

module.exports = {
    FillDB: () => {
        FillProductDev()
        FillProductPublishers()
        FillProductLanguages()
        FillProductGenres()
        FillUsers()
        FillProducts()
        FillSystemRequrements()
        FillLangAssoc()
        CreateBaskets()
        FillSystemChars()
    }
}