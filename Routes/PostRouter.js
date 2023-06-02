// Importerer dependencies
import express from'express'

// Deklarerer var til router
const postRouter = express.Router()

// Route med GET method - henter
postRouter.get("/", (req, res) => {
    // Get parametre hentes på request objektets query property
    console.log(req.query);
    res.send("Here you can get all posters");
})
// Route med POST method - opretter
postRouter.post("/", (req, res) => {
    // Henter form body data på res objektet og "sender" (udskriver) til browser
	// Du kan logge req.body og se alle forespørgelsens form data 
    res.send(`${req.body.firstname} ${req.body.lastname}
    ${req.body.email} 
    ${req.body.birthday}
    ${req.body.password} 
    ${req.body.position}
    ${req.body.address}
    `);
})

// Route med PUT method - opdaterer
postRouter.put("/", (req, res) => {
    res.send("Here you can update a poster");
})

// Route med DELETE method - Sletter
postRouter.delete("/", (req, res) => {
    res.send("Here you can delete posters");
})

export { postRouter }