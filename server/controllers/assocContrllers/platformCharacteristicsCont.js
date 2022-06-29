const {Platform} = require("../../models/models") 

class PlatformCharacteristicsCont{

    async GetListByProductId(idToGet){

        const ProductPlatforms = await Platform.PlatformAssociation.findAll({
            where: {
                productId: idToGet
            }
        })

        return JSON.parse(JSON.stringify(ProductPlatforms))
    }

    //async GetCharAssocByPlatformId
/*
    async GetSystemRequirementsByProductId(idToGet){
        const ProductPlatforms = this.GetListByProductId(idToGet).then(
            value => {
                return value
            })

        const PlatformsIds = 
    }*/
}

module.exports = new PlatformCharacteristicsCont()