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
            if(err) {
                console.error(err)
            } else {
                res.json(result);
            }
        })
    }
}

export default ArtistController