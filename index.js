import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app. Igen..");
})

app.get("/about", (req, res) => {
    res.send("Læs om min NodeJS app..");
})

app.get("/products", (req, res) => {
    res.send("Produkter")
})

app.get("/products/details", (req, res) => {
    res.send("Produkt detaljer")
})

//Hvis siden ikke kan findes
app.use((req, res) => {
    res.status(404).send("Siden blev ikke fundet")
})


app.listen(4242, () => {
    console.log('Server kører på port 4242: http://localhost:4242');
})