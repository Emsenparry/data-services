import express from 'express'
import { postRouter } from './Routes/PostRouter.js';
import { productRouter } from './Routes/ProductPoster.js';
import db from './Config/db.config.js';
// Importerer og sætter dotenv til globale vars
import dotenv from 'dotenv'

db.query(`SELECT title FROM song`, (err, result) => {
    console.log(result);
})

db.query(`SELECT s.id, s.title, s.content, s.artist_id, a.name
        FROM song s 
        JOIN artist a
        ON s.artist_id = a.id 
        `, (err, result) => {
        if(err) {
            console.error(err)
        } else {
          console.log(result);  
        }
        
    }
  );


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
app.use(postRouter)
app.use(productRouter)




// Skriver fejl hvis route ikke findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})

// Aktiverer server og lytter på port fra .env fil
app.listen(port, () => {
console.log(`Server kører på http://localhost:${port}`);
})