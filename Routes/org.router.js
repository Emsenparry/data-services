// Importerer dependencies
import express from'express'
import OrgController from '../Controllers/org.controller.js';
import verifyToken from '../Middleware/verifytoken.js';

// Deklarerer var til router
const orgRouter = express.Router()
const org = new OrgController()

// Route med GET method - henter
orgRouter.get('/org', (req, res) => {
	return org.list(req, res)
})

// Route med GET method - henter detaljer
orgRouter.get('/org/:id([0-9]*)', (req, res) => {
    return org.details(req, res)
})

// Route med POST method - opretter
orgRouter.post("/org", verifyToken, (req, res) => {
    return org.create(req, res)
})

// Route med PUT method - opdaterer
orgRouter.put('/org/:id([0-9]*)', (req, res) => {
	return org.update(req, res)
})

// Route med DELETE method - Sletter
orgRouter.delete('/org/:id([0-9]*)', (req, res) => {
    return org.delete(req, res)
})

export { orgRouter }