import db from "../Config/db.config.js";

class ArtistController {
    constructor() {
        console.log('Class ArtistController instantiated');
    }

    list = (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query
        sortkey = sortkey ? sortkey : 'id'
        sortdir = sortdir ? sortdir.toUpperCase() : 'ASC'
        limit = limit ? `LIMIT ${parseInt(limit)}` : ''
        attributes = attributes ? attributes : 'id, name'


        const sql = `SELECT ${attributes}
                         FROM artist
                         ORDER BY ${sortkey} ${sortdir} ${limit}
                         `
        db.query(sql, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json(result)
            }
        })
    }

    details = (req, res) => {
        const id = req.params.id || 0

        const sql = `SELECT id, name
                        FROM artist
                        WHERE id = ?
                        `
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json(result);
            }
        })
    }

    create = (req, res) => {
        let { name } = req.body;

        const sql = `INSERT INTO 
                        artist (name) 
                        VALUES (?)`
        db.query(sql, [name], (err, result) => {
            if (err) {
                console.error(err)
            } else {
                console.log('Artist oprettet')
                res.json({ new_id: result.insertId })
            }
        })
    }

    update = (req, res) => {
        let { name, id } = req.body;

        const sql = `UPDATE artist SET
                        name = ?
                        WHERE id = ?`
        db.query(sql, [name, id], (err, result) => {
            if (err) {
                console.error(err)
            } else {
                res.json({
                    status: 'ok',
                    updated_id: id
                })
            }
        })
    }

    delete = (req, res) => {
        const id = req.params.id || 0
        const sql = `DELETE FROM artist 
                     WHERE id = ?`
        
        db.query(sql, [id], (err, result) => {
            if(err) {
                console.error(err)
            } else {
                res.sendStatus(200);
            }
        })
    } 	
}

export default ArtistController