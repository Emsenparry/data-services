import express from 'express'
import { router as ProductRouter } from "./Routes/ProductRouter.js";

const app = express()

// Links kommer fra ProductRouter filen
app.use(ProductRouter)


//Hvis siden ikke kan findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})

// Hvilekn port lytter vi til
app.listen(4242, () => {
    console.log('Server kører på port 4242: http://localhost:4242');
})