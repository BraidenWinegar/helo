require('dotenv').config();
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const ctrl = require('./controller')
const authCtrl = require('./authController')


const app = express()

//topLevel middleware
app.use(express.json())
app.use(session({
    resave:false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 3600000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})



//// auth controller endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.post('/auth/user', authCtrl.getUser)

// /// main contrioller enpoints
// app.put('/api/balance',  mainCtrl.updateBalance)

app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`))