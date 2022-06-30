const {Platform} = require("../../models/models") 

class PlatformCharacteristicsCont{

    async AddSystemRequrements(productId, systemRequrements)
    {
        systemRequrements.forEach(systemCharacteristics => {
            const minimal_char = systemCharacteristics.min
            const recommended_char = systemCharacteristics.rec
            const platformCharacteristicId = systemCharacteristics.id

            Platform.PlatformSystemRequirements.create({minimal_char, recommended_char,platformCharacteristicId, productId})
        });
    }

    async GetPlatformCharacteristicsById(idToGet){
        const CharById = await Platform.PlatformCharacteristics.findAll({
            where: {
                id: idToGet
            }
        })
        return JSON.parse(JSON.stringify(CharById))
    }

    async GetListByProductId(idToGet){

        const ProductPlatforms = await Platform.PlatformSystemRequirements.findAll({
            where: {
                productId: idToGet
            }
        })

        return JSON.parse(JSON.stringify(ProductPlatforms))
    }

    async GetSystemRequirementsByProductId(idToGet){
        const ProductPlatforms = this.GetListByProductId(idToGet).then(
            value => {
                return value
            })
        
        const PlatformCharecNames = ProductPlatforms.then(value=>{
            let Chars = []

            let itter = 0
            value.forEach(element => {
                Chars.push({})
                Chars[itter].id = element.platformCharacteristicId
                Chars[itter].min = element.minimal_char
                Chars[itter].rec = element.recommended_char
                itter+=1
            });

            return Chars
        })

        const Characteristics = PlatformCharecNames.then(value=>{
            let NewCharSet = value
            let Promises = []
            value.forEach(CharSet => {
                Promises.push(this.GetPlatformCharacteristicsById(CharSet.id).then(value=>{
                    let IdToNameMap = []
                    IdToNameMap.id = CharSet.id
                    IdToNameMap.name = value[0].name
                    return IdToNameMap
                }))
            });

            return Promise.all(Promises).then(value=>{
                for(let i = 0; i < NewCharSet.length; i++)
                {
                    if(NewCharSet[i].id == value[i].id){
                        NewCharSet[i].name = value[i].name
                    }
                }
                return NewCharSet
            })      
        })
        return Characteristics.then(value=>{
            return value
        })
    }
}

module.exports = new PlatformCharacteristicsCont()