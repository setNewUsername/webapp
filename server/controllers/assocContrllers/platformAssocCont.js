const {Platform} = require("../../models/models")

class PlatfromAssocCont{
    async AddAssociations(productId, productLanguages) {
        try{
            let platformId = 1
            let productId = 1
            Platform.PlatformAssociation.create(platformId, productId)
        }
        catch(e)
        {
            console.log(e.message)
        }
    }
}

module.exports = new PlatfromAssocCont()