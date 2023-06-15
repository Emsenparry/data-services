import UserModel from "../Models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

class AuthenticateController {
    login = async (req, res) => {
        const { username, password } = req.body;
        if(username && password) {
            const userData = await UserModel.findOne({
                attributes: ['id', 'password'],
                where: { email: username }
            })
            
            bcrypt.compare(password, userData.password, (err, result) => {
                if(result){
             
                    // Generer json web token
                    const token = jwt.sign(userData.id, process.env.PRIVATE_KEY)
                    res.json({access_token: token})
                } else {
                    res.sendStatus(401)
                }
            })
        } else {
            res.sendStatus(403)
        }
    }
    protected = async (req, res) => {
        res.sendStatus(200)
    }
}

export default AuthenticateController