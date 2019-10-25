const bcrypt = require('bcryptjs')

module.exports = {

    ////change
    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        
        let foundUser = await db.check_username(username)
        foundUser=foundUser[0]
        
        if(!foundUser){
            res.status(401).send('user does not exist')
        }

        const authenticated = bcrypt.compareSync(password,
            foundUser.password)

        if(authenticated){
            delete foundUser.bank_user_password;
            req.session.usr = foundUser;
            res.status(202).send(req.session.user)
        } else {
            res.status(401).send('Password is incorrect')
        }
    },

    ///change
    register: async(req, res) => {
        const {username, password, picture} = req.body;
        const db = req.app.get('db');
        let foundUser = await db.check_username(username);
        foundUser = foundUser[0]
        if(foundUser){
            res.status(409).send('Email already exists');
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            let newUser = await db.register(username, hash, picture);////username password picture
            newUser = newUser[0];
            req.session.user = {...newUser};
            res.status(200).send(req.session.user);
        }
    },

    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    },

    getUser: async (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        }
        res.sendStatus(200)
    },
}