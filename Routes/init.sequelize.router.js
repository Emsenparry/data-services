import express from 'express'
import { sequelize } from '../Config/db.sequelize.js'

// !!! Import the model that you want a table for !!!

// import SongModel from '../Models/song.model.js' 
// import ArtistModel from '../Models/artist.model.js'
// import UserModel from '../Models/user.model.js'
// import OrgModel from '../Models/org.model.js'

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