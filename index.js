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
const PORT = process.env.PORT
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public/images"));
// test________

// var imgModel = require('./models/prodectitem');
// var bodyParser = require('body-parser');
// var fs = require('fs');
// var path = require('path')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer({ storage: storage });
// app.get('/profile', (req, res) => {
//     imgModel.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('profile', { newItems: items });
//         }
//     });
// });
// app.post('/marktplatz', upload.single('image'), (req, res, next) => {
 
//     var obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         image: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             // item.save();
//             res.redirect('/marktplatz');
//         }
//     });
// });

//  ________________________  

// app.get('/', (req, res) => {
//     res.render('index')
//     })
// app.post('/add' ,(req,res) =>{
//         console.log(req.body);
//         const newItems=  new ShopItem(req.body)
//         newItems.save()
//         .then(result => res.render('marktplatz'))
//         .catch(err => console.log(err))  
//     })
// app.get('/community' ,(req,res) =>{
//         res.render('community')
//     })
// app.get('/ueber' ,(req,res) =>{
//         res.render('über')
//     })
// app.get('/resources' ,(req,res) =>{
//         res.render('resources')
//     })
    // app.use(function (req, res, next) {
    //     res.status(404).render('404', { title:'Error' });
    // });
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
        // console.log(req.body);
        // res.render('marktplatz',{newItems})
        // const newItems=  new ShopItem(req.body)
        // newItems.save()
        // .then(result => res.redirect('marktplatz'))
        // .catch(err => console.log(err))  
    })
    app.post('/marktplatz' ,(req,res) =>{
        console.log(req.body);
        
        const newItems=  new ShopItem(req.body)
        newItems.save()
        .then(result =>{ res.redirect('/marktplatz')})
        .catch(err => console.log(err))  
        
    })
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

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)
