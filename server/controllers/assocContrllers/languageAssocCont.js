const {Language} = require("../../models/models")

class LangAssocCont{for
    async AddLangAssociations(productId, productLanguages) {
        productLanguages.forEach(lang => {
            console.log(lang.id)
            let languageId = lang.id
            Language.LanguageAssociation.create(languageId, productId)
        });   
           
    }
}

module.exports = new LangAssocCont()