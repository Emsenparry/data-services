import express from'express'

const postRouter = express.Router()


postRouter.get("/", (req, res) => {
    res.send("Here you can get all posters");
})
postRouter.post("/", (req, res) => {
    res.send(`${req.body.firstname} ${req.body.lastname}`);
})
postRouter.put("/", (req, res) => {
    res.send("Here you can update a poster");
})
postRouter.delete("/", (req, res) => {
    res.send("Here you can delete posters");
})

export { postRouter }