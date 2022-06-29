const Models = require("../models/models")

module.exports = {
    FillDB: () => {
        for(let i = 0; i < 10; i++)
        {
            let name = "dev_test_" + i 
            Models.Developer.ProductDeveloper.create({name});

            name = "genre_test_" + i
            Models.Genre.ProductGenre.create({name})

            name = "publisher_test_" + i
            Models.Publisher.ProductPublisher.create({name})

            name = "lang_test_" + i
            Models.Language.Language.create({name})
        }

        for(let i = 0; i < 10; i++)
        {
            let email = "test_" + i + "@mail.com"
            let balance = 1000
            let password = 'aaaa'
            let access_rights = 'USER'

            Models.User.User.create({email, balance, password, access_rights});
        }

        for(let i = 0; i < 5; i++)
        {
            minimal_char = 'min_test'
            recommended_char = 'rec_test'
            platformCharacteristicId = i
            productId = 1

            Models.Platform.PlatformSystemRequirements.create({minimal_char, recommended_char, platformCharacteristicId, productId})
        }

        platform_characteristics = ['gpu', 'cpu', 'windows', 'disk_space', 'ram']

        for(let i = 0; i < platform_characteristics.length; i++)
        {
            let name = platform_characteristics[i]
            Models.Platform.PlatformCharacteristics.create({name})
        }

        languages = ['Russian', 'English', 'German', 'Spanish', 'Italian']

        for(let i = 0; i < languages.length; i++) {
            let name = languages[i]
            Models.Language.Language.create({name})
        }

        for(let i = 0; i < 5; i++){
            let name = "test_product_name_" + i
            let multiplayer = "false"
            let price = 1000
            let image = "test_product_image_" + i
            let productGenreId = 1
            let productDeveloperId = 1
            let productPublisherId = 1
            let amount = 1
            let youtube = "test_product_youtube_" + i
            Models.Product.Product.create({name, multiplayer, price, image, productGenreId, productDeveloperId, productPublisherId, amount, youtube})
        }
    }
}