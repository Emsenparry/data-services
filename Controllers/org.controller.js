import OrgModel from '../Models/org.model.js'

class OrgController {
    constructor() {
        console.log('Org Controller has been fired');
    }

    list = async (req, res) => {
        const result = await OrgModel.findAll({
            attributes: ['id', 'title'],
            order: ['id']
        })
        res.json(result)
    }
    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await OrgModel.findOne({
            attributes: ['id', 'title', 'address', 'zipcode', 'city', 'country'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { title, address, zipcode, city, country } = req.body;

        if (title && address && zipcode && city && country) {
            const model = await OrgModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id } = req.params ||0
        const { title, address, zipcode, city, country } = req.body;
        
        if(id && title && address && zipcode && city && country) {
            const model = await OrgModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({
                msg: 'Org updated'
            })
        } else {
            res.sendStatus(418)
        }
    }
    delete = async (req, res) => {
        try {
            await OrgModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }	
}

export default OrgController