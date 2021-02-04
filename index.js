require('dotenv').config()

const express = require('express')

const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.dbUri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(result =>{
app.listen(process.env.PORT,()=> console.log(`http://localhost:${process.env.PORT}`))
})
.catch(err => console.log(err))


app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.json())

app.use(express.urlencoded({extended: false}))





app.get('/', (req, res) => {
    res.render('index', {  title:'nothingtotrash Home' })
    })

    app.get('/marktplatz' ,(req,res) =>{
        res.render('marktplatz',{title:'nothingtotrash Marktplatz'})
    })

    app.get('/community' ,(req,res) =>{
        res.render('community',{title:'nothingtotrash Community'})
    })

    app.get('/ueber' ,(req,res) =>{
        res.render('über',{title:'nothingtotrash Über Uns'})
    })

    app.get('/resources' ,(req,res) =>{
        res.render('resources',{title:'nothingtotrash Resources'})
    })
    
    
 
    
    app.use(function (req, res, next) {
        res.status(404).render('404', { title:'Error' });
    });