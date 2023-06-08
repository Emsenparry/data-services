// Importerer dependencies
import express from'express'
import artistController from '../Controllers/artist.controller.js';

// Deklarerer var til router
const artistRouter = express.Router()
const artist = new artistController()

// Route med GET method - henter
artistRouter.get('/artist', (req, res) => {
	return artist.list(req, res)
})

// Route med GET method - henter detaljer
artistRouter.get('/artist/:id([0-9]*)', (req, res) => {
    return artist.details(req, res)
})

// Route med POST method - opretter
artistRouter.post("/artist", (req, res) => {
    return artist.create(req, res)
})

// Route med PUT method - opdaterer
artistRouter.put('/artist', (req, res) => {
	return artist.update(req, res)
})

// Route med DELETE method - Sletter
artistRouter.delete('/artist/:id([0-9]*)', (req, res) => {
    return artist.delete(req, res)
})

export { artistRouter }