const {Basket} = require("../../models/models")

class BasketAssocCont{
    async AddAssociations(productId, productLanguages) {
        try{
            let basketId = 1
            let productId = 1
            Basket.BasketAssoc.create(basketId, productId)
            //Language.LanguageAssociation.drop()
        }
        catch(e)
        {
            console.log(e.message)
        }
    }
}

module.exports = new BasketAssocCont()