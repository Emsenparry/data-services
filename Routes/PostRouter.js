import express from'express'

const postRouter = express.Router()


postRouter.get("/posts", (req, res) => {
    res.send("Here you can get all posters");
})
postRouter.post("/posts", (req, res) => {
    res.send("Here you can make a poster");
})
postRouter.put("/posts", (req, res) => {
    res.send("Here you can update a poster");
})
postRouter.delete("/posts", (req, res) => {
    res.send("Here you can delete posters");
})

export { postRouter }