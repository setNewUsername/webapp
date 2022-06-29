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

            name = "platform_test_" + i
            Models.Platform.Platform.create({name})

            name = "lang_test_" + i
            Models.Language.Language.create({name})
        }

        for(let i = 0; i < 10; i++)
        {
            let email = "test_" + i + "@mail.com"
            let password = "aaaa"
            let access_rights = "USER"

            Models.User.User.create(email, password, access_rights);
        }
    }
}