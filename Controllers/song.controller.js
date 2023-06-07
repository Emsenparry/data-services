import db from "../Config/db.config.js";

class SongController {
    constructor() {
        console.log('Class SongController instantiated');
    }

    list = (req, res) => {
        console.log(req.query);
        let { sortkey, sortdir, limit, attributes } = req.query

        // Sætter ternary operator. Hvis sortkey er true, 
        // så skal den sæt den til sortkey eller så skal den sorteres efter id.
        sortkey = sortkey ? sortkey : 's.id';
        sortdir = sortdir ? sortdir.toUpperCase() : 'ASC'
        limit = limit ? `LIMIT ${parseInt(limit)}` : ''
        attributes = attributes ? attributes : 's.id, s.title, a.name'

        const sql = `SELECT ${attributes}
                    AS artist_id
                    FROM song s
                    JOIN artist a
                    ON s.artist_id = a.id
                    ORDER BY ${sortkey} ${sortdir} ${limit}`
                    console.log(sql);
        db.query(sql, (err, result) => {
            if (err) {
                console.error(err)
            } else {
                // Parser resultatet som en json fil
                res.json(result)
            }
        })
    }

    details = (req, res) => {
        const id = req.params.id
        const sql = `SELECT s.id, s.title, s.content, a.name, s.created_at
                    FROM song s
                    JOIN artist a
                    ON s.artist_id = a.id
                    WHERE s.id = ?
                    ORDER BY a.name`
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error(err)
            } else {
                // Parser resultatet som en json fil
                res.json(result)
            }
        })
    }

    create = (req, res) => {
        const { title, content, artist_id } = req.body
        //console.log({title, content, artist_id});

        if (title && content && artist_id) {
            const sql = `INSERT INTO song
                       (title, content, artist_id) 
                       VALUES(?,?,?)
                        `
            db.query(sql, [title, content, artist_id], (err, result) => {
                if (err) {
                    console.error(err)
                } else {
                    res.json({ new_id: result.insertId })
                }
            })
        }

    }

    update = (req, res) => {
        const { title, content, artist_id, id } = req.body
        if (title && content && artist_id && id) {
            
            const sql = `
                        UPDATE song
                        SET title = ?,
                        content = ?,
                        artist_id = ?
                        WHERE id = ?
                        `
            db.query(sql, [title, content, artist_id, id], (err, result) => {
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
    }

    delete = (req, res) => {
        const id = req.params.id
        const sql = `DELETE FROM song
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

export default SongController