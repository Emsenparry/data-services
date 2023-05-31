import express from'express'

const router = express()

router.get("/", (req, res) => {
    res.send("Velkommen til min NodeJS app. Igen..");
})

router.get("/about", (req, res) => {
    res.send("Læs om min NodeJS app..");
})

router.get("/products", (req, res) => {
    res.send("Produkter")
})

router.get("/products/details", (req, res) => {
    res.send("Produkt detaljer")
})

export { router }