import express from 'express'
import { postRouter } from './Routes/PostRouter.js';
import { productRouter } from './Routes/ProductPoster.js';

// Importerer og sætter dotenv til globale vars
import dotenv from 'dotenv'
dotenv.config()

// Deklarerer app var med ekspress objekt
const app = express()
// Udvider app så vi kan læse form body data
app.use(express.urlencoded({ extended: true}))
// Deklarer port for at kunne bruge den længere nede
const port = process.env.PORT;

// Kalder root route - forsiden af vores app 
app.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app. Igen..");
})


// Anvender eksterne routes
app.use("/posts", postRouter)
app.use(productRouter)




// Skriver fejl hvis route ikke findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})

// Aktiverer server og lytter på port fra .env fil
app.listen(port, () => {
console.log(`Server kører på http://localhost:${port}`);
})