import express from'express'

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

export { app }