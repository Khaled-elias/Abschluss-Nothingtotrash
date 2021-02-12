require('dotenv').config()
const express = require('express')

const app = express()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./config/passport-setup')
const ShopItem = require('./models/prodectitem')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const bodyParser = require('body-parser');

const PORT = process.env.PORT
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.use(express.static("public/images"));
app.use(bodyParser.urlencoded({ extended: false }));

// test______________________________-


//  ______________________________________________ 


app.set('view engine', 'ejs')
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 1000 * 60 * 60 * 24 
}))
app.use(passport.initialize());
app.use(passport.session());




mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log("Connected");
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    })
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.render('index')
    })
app.get('/marktplatz' ,(req,res) =>{
    ShopItem.find()
    .then(result => res.render('marktplatz',{newItems: result}))
    .catch(err => console.log(err)) 
    })

    app.post('/add' ,(req,res) =>{
        console.log(req.body);
        
        const newItems=  new ShopItem(req.body)
        newItems.save()
        .then(result => res.redirect('/marktplatz'))
        .catch(err => console.log(err))  
        
    })

    app.post('/marktplatz/search' ,(req,res) =>{

        const searchedValue = req.body.Search;
        ShopItem.find()
        .then(result => {
            let finalResult = [];

            if(searchedValue !== ''){
                result.forEach(item => {
                    if(item.titel.includes(searchedValue) || item.kategorie.includes(searchedValue)){
                        finalResult.push(item)
                    }
                })
            }
            res.render('marktplatz',{newItems: finalResult})
        })
        .catch(err => console.log(err))

        // res.render("marktplatz", { newItems: result })
    })
    // SEARCH___________________-
  
    //   _______________________-
app.get('/community' ,(req,res) =>{
        res.render('community')
    })
app.get('/ueber' ,(req,res) =>{
        res.render('über')
    })
app.get('/resources' ,(req,res) =>{
        res.render('resources')
    })
    // app.use(function (req, res, next) {
    //     res.status(404).render('404', { title:'Error' });
    // });
    // details__________________________
    app.get('/details/:id', (req, res) => {
        // console.log(req.params.id);
        ShopItem.findById(req.params.id)
        // ShopItem.find()
        .then(result => res.render('details',{newItems1: result}))
        .catch(err => console.log(err))
    })

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
