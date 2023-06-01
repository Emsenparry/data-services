import express from 'express'
import { postRouter } from './Routes/PostRouter.js';

const app = express()

app.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app. Igen..");
})

// Links kommer fra ProductRouter filen
app.use(postRouter)


//Hvis siden ikke kan findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})

// Hvilekn port lytter vi til
app.listen(4242, () => {
    console.log('Server kører på port 4242: http://localhost:4242');
})