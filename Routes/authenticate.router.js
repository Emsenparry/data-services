import express from 'express'
import AuthenticateController from '../Controllers/authenticate.controller.js'
import verifyToken from '../Middleware/verifytoken.js';
const AuthRouter = express.Router()

const Auth = new AuthenticateController();

AuthRouter.post('/login', (req, res) => { Auth.login(req, res) })
AuthRouter.get('/protected', verifyToken, (req, res) => { Auth.protected(req, res) }) 

export { AuthRouter }