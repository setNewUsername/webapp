const LanguageAssoc = require("../../models/languageModel")
const {Language} = require("../../models/models")
const {Platform} = require("../../models/models")

class LangAssocCont{
    async AddAssociations(productId, productLanguages) {
        try{
            let platformId = 1
            let productId = 1
            Platform.PlatformAssociation.create(platformId, productId)
            //Language.LanguageAssociation.drop()
        }
        catch(e)
        {
            console.log(e.message)
        }
    }
}

module.exports = new LangAssocCont()