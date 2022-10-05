import Admin from "../../models/adminModel"
import { connectMongo } from "../../utils/connectMongo"
export default async function  login(req, res){
    await connectMongo()
    try {
        await Admin.create({
          password:req.body.password,
          email:req.body.email,
          name:req.body.name,
        })
        return res.json({ status: 200 })
      } catch (error) {
        console.log(error)
        return res.json({ status: 'error', error: 'duplicate email' })
      }
}