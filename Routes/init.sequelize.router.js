import express from 'express'
import { sequelize } from '../Config/db.sequelize.js'
import SongModel from '../Models/song.model.js' 
// import ArtistModel from '../Models/artist.model copy.js'

const InitRouter = express.Router()

InitRouter.get('/init', (req, res) => {
    try{
        sequelize.sync()
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
})

export default InitRouter