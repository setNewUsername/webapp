const {Language} = require("../../models/models")

class LangAssocCont{
    async AddAssociations(productId, productLanguages) {
        try{
            let languageId = 1
            let productId = 1

            Language.LanguageAssociation.create(languageId, productId)
            //LanguageAssociation.drop()
        }
        catch(e)
        {
            console.log(e.message)
        }
    }
    GetAssociationsByPorductId(productIdToGet){

        const ProductLanguages = Language.LanguageAssociation.findAll({
            where: {
                productId: productIdToGet
            }
        })

        return ProductLanguages
    }
}

module.exports = new LangAssocCont()