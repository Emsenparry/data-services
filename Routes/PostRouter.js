// Importerer dependencies
import express from'express'
import SongController from '../Controllers/song.controller.js';

// Deklarerer var til router
const postRouter = express.Router()
const song = new SongController()

// Route med GET method - henter
postRouter.get('/posts', (req, res) => {
	return song.list(req, res)
    // res.send('henter lister')
})

// Route med GET method - henter detaljer
postRouter.get('/posts/:id([0-9]*)', (req, res) => {
    return song.details(req, res)
    res.send('henter details')
})

// Route med POST method - opretter
postRouter.post("/create", (req, res) => {
    // Henter form body data på res objektet og "sender" (udskriver) til browser
	// Du kan logge req.body og se alle forespørgelsens form data 
    res.send(`${req.body.firstname} ${req.body.lastname}
    ${req.body.email} 
    ${req.body.birthday}
    ${req.body.password} 
    ${req.body.position}
    ${req.body.address}
    `);
    console.log(song.create());
})

// Route med PUT method - opdaterer
postRouter.put('/update/:id([0-9]*)', (req, res) => {
	console.log(song.update());
    res.send('Opdater')
})

// Route med DELETE method - Sletter
postRouter.delete('/delete/:id([0-9]*)', (req, res) => {
	console.log(song.delete());
    res.send('Delete')
})

export { postRouter }