import express from'express'

const productRouter = express.Router()


productRouter.get("/products", (req, res) => {
    res.send("Here you can get all products");
})
productRouter.post("/products", (req, res) => {
    res.send("Here you can make a products");
})
productRouter.put("/products", (req, res) => {
    res.send("Here you can update a products");
})
productRouter.delete("/products", (req, res) => {
    res.send("Here you can delete productss");
})


export { productRouter }