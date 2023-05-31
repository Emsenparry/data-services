import express from 'express'
import { app as ProductRouter } from "./Routes/Products.js";

const app = express()

app.use(ProductRouter)


//Hvis siden ikke kan findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})


app.listen(4242, () => {
    console.log('Server kører på port 4242: http://localhost:4242');
})