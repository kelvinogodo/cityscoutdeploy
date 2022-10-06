import  Properties from '../../../models/propertyModel'
import {connectMongo} from '../../../utils/connectMongo'
export default async function handler(req, res) {
    console.log('CONNECTING TO MONGODB FOR FECTHING PROPERTIES....')
    await connectMongo()
    console.log('CONNECTED TO MONGODB FOR FECTHING PROPERTIES....')
    const properties = await Properties.find()
    if(properties !== []){
        res.status(200).json(properties)
        console.log(properties)
    }
    else{
        res.status(400).json([])
    }
}