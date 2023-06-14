// Importerer dependencies
import express from'express'
import userController from '../Controllers/user.controller.js';

// Deklarerer var til router
const userRouter = express.Router()
const user = new userController()

// Route med GET method - henter
userRouter.get('/user', (req, res) => {
	return user.list(req, res)
})

// Route med GET method - henter detaljer
userRouter.get('/user/:id([0-9]*)', (req, res) => {
    return user.details(req, res)
})

// Route med POST method - opretter
userRouter.post("/user", (req, res) => {
    return user.create(req, res)
})

// Route med PUT method - opdaterer
userRouter.put('/user/:id([0-9]*)', (req, res) => {
	return user.update(req, res)
})

// Route med DELETE method - Sletter
userRouter.delete('/user/:id([0-9]*)', (req, res) => {
    return user.delete(req, res)
})

export { userRouter }