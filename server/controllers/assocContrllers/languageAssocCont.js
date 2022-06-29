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

    async GetAssociationsByPorductId(productIdToGet){

        const ProductLanguages = await Language.LanguageAssociation.findAll({
            where: {
                productId: productIdToGet
            }
        })

       return JSON.parse(JSON.stringify(ProductLanguages))
    }

    async GetById(languageId){
        const LanguageById = await Language.Language.findAll({
            where: {
                id: languageId
            }
        })
        return JSON.parse(JSON.stringify(LanguageById))
    }

    async GetLanguageNamesByProductId(productIdToGet)
    {
        const LangaugeAssocList = this.GetAssociationsByPorductId(productIdToGet).then(
            value => {
                return value
            }
        )
        const LanguagesIds = LangaugeAssocList.then(value=>{
            let languageIds = []

            value.forEach(element => {
                languageIds.push(element.languageId)
            });

            languageIds = languageIds.filter((val, ind, arr) => arr.indexOf(val) === ind);

            return languageIds
        })
        const lang = LanguagesIds.then(value=>{
            let Languages = []
            let LanguageNames = []
            value.forEach(idToGet => {
                Languages.push(this.GetById(idToGet).then(value=>{
                    return value[0].name
                }))
            });

            return Promise.all(Languages).then(value=>{
                LanguageNames.push(value)
                return LanguageNames[0]
            })                        
        })
        return lang.then(value=>{
            return value
        })
    }
}

module.exports = new LangAssocCont()