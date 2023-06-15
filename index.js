import express from 'express'
import { songRouter } from './Routes/song.router.js';
import { artistRouter } from './Routes/artist.router.js';
import InitRouter from './Routes/init.sequelize.router.js';
import { userRouter } from './Routes/user.router.js';
import { orgRouter } from './Routes/org.router.js';
import { AuthRouter } from './Routes/authenticate.router.js';

// Importerer og sætter dotenv til globale vars
import dotenv from 'dotenv'


dotenv.config()

// Deklarerer app var med ekspress objekt
const app = express()
// Udvider app så vi kan læse form body data
app.use(express.urlencoded({ extended: true}))
// Deklarer port for at kunne bruge den længere nede
const port = process.env.PORT;


// Anvender eksterne routes
app.use(songRouter)
app.use(artistRouter)
app.use(InitRouter)
app.use(userRouter)
app.use(orgRouter)
app.use(AuthRouter)


// Skriver fejl hvis route ikke findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})

// Aktiverer server og lytter på port fra .env fil
app.listen(port, () => {
console.log(`Server kører på http://localhost:${port}`);
})