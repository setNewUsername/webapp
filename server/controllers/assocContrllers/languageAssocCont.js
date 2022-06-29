const {Language} = require("../../models/models")
//const {Platform} = require("../../models/models")

class LangAssocCont{
    async AddLangAssociations(productId, productLanguages) {
        try{
            let languageId = 1
            let productId = 1
            Language.LanguageAssociation.create(languageId, productId)
        }
        catch(e)
        {
            console.log(e.message)
        }
    }
}

module.exports = new LangAssocCont()