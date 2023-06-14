import UserModel from '../Models/user.model.js'

class UserController {
    constructor() {
        console.log('User Controller has been fired');
    }

    list = async (req, res) => {
        const result = await UserModel.findAll({
            attributes: ['id', 'firstname', 'lastname'],
            order: ['firstname']
        })
        res.json(result)
    }
    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await UserModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { firstname, lastname, email, password, org_id, is_active } = req.body;

        if (firstname && lastname && email && password && org_id && is_active) {
            const model = await UserModel.create(req.body)
            res.json({ newId: model.id })
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id } = req.params ||0
        const { firstname, lastname, email, password } = req.body;
        
        if(id && firstname && lastname && email && password) {
            const model = await UserModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({
                msg: 'User updated'
            })
        } else {
            res.sendStatus(418)
        }
    }
    delete = async (req, res) => {
        try {
            await UserModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }	
}

export default UserController