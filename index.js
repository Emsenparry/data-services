import express from 'express'
import dotenv from 'dotenv'
import { postRouter } from './Routes/PostRouter.js';
import { productRouter } from './Routes/ProductPoster.js';
dotenv.config()


const app = express()
app.use(express.urlencoded({ extended: true}))
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app. Igen..");
})

// Links kommer fra ProductRouter filen
app.use("/posts", postRouter)
app.use(productRouter)




//Hvis siden ikke kan findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})

// Hvilekn port lytter vi til
app.listen(port, () => {
console.log(`Server kører på http://localhost:${port}`);
})