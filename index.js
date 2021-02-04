require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./config/passport-setup')

const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const PORT = process.env.PORT || 5000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 1000 * 60 * 60 * 24 // Zeit in ms => das ist ein Tag
}))

app.use(passport.initialize());
app.use(passport.session());

// Cookie-Session als Middleware installieren + configurieren
// Dieses package SETZT einen Cookie!



mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log("Connected");
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    })
    .catch(err => console.log(err));

// Installation: 
// npm install passport-google-oauth20
// npm i passport
// npm install cookie-session

// in der google developer console neues projekt registiren
// OAuth - Zustimmungsbildschirm eintragen KEIN google im Namen 
// Anmeldedaten => Oauth-Client-ID
// Webanwendung
// URL auf der es laufen soll
// CLIENT_ID und CLIENT_SECRET in eurem Projekt hinterlegen
// passport-setup eure Daten eintragen, die Callbackurl setzten und in der dev console hinzufügen
// passport Setup / app.use
// app.use(passport.initialize());
// app.use(passport.session());
// in unserer passport-setup de/serializeUser Funktion hinzugefügt
// auth routes erstellt mit den infos aus google-auth-20 von passportjs HP
// passport-setup importieren
app.get('/', (req, res) => {
    res.render('index')
})

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)


// require('dotenv').config()

// const express = require('express')
// const app = express()
// const passport = require('passport')
// const cookieSession = require('cookie-session')
// require('./config/passport-setup')
// const authRoutes = require('./routes/authRoutes')
// const profileRoutes = require('./routes/profileRoutes')

// const mongoose = require('mongoose')

// mongoose.connect(process.env.dbUri,{useNewUrlParser: true, useUnifiedTopology: true})
// .then(result =>{
// app.listen(process.env.PORT,()=> console.log(`http://localhost:${process.env.PORT}`))
// })
// .catch(err => console.log(err))


// app.use(express.static('public'))
// app.set('view engine','ejs')
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
// app.use(cookieSession({
//     name: 'session',
//     keys: ['key1', 'key2'],
//     maxAge: 1000 * 60 * 60 * 24 
// }))
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//     res.render('home')
// })
// app.use('/auth', authRoutes)
// app.use('/profile', profileRoutes)

