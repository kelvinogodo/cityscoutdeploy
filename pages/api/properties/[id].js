import Properties from '../../../models/propertyModel'
import {connectMongo} from '../../../utils/connectMongo'
export default async function handler({query:{id}}, res) {
    await connectMongo()
    const properties = await Properties.find()
    if(properties !== null){
        const filteredProperty =  properties.filter(property =>(property._id == id ))
        if(filteredProperty.length > 0){
            res.status(200).json(filteredProperty[0])
        }
        else{
            res.status(404).json({message : `property with the id ${id} does not exist`})
        }
    }
    else{
        res.status(400).json([])
    }
}