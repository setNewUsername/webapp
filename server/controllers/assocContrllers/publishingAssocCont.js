const {Publishing} = require("../../models/models")

class PlatfromAssocCont{
    async AddAssociations(productId, productLanguages) {
        try{
            let publishingTypeNameId = 1
            let productId = 1
            Publishing.PublishingType.create(publishingTypeNameId, productId)
        }
        catch(e)
        {
            console.log(e.message)
        }
    }
}

module.exports = new PlatfromAssocCont()