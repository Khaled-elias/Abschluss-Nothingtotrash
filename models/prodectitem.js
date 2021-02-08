const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productItemSchema = new Schema({
    titel: {
        type: String, 
        required: true
    },
    Beschreibung: {
        type: String, 
        required: true
    },
    number: {
        type: String,
        required: true, 
        
    },
    price: {
        type: String,
        required: true, 
        
    },
    Marke: {
        type: String,
        required: true, 
        
    },
    Stücke: {
        type: String,
        required: true, 
        
    },
    Frische: {
        type: String,
        required: true, 
        
    },
    result: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    kategorie: {
        type: String,
        required: true, 
        useUnifiedTopologyenum: ['Möbel', 'Klamotten', 'Elektronik', 'Spielzeuge'],
    },
    PLZ: {
        type: String,
        required: true
    },
    Ort: {
        type: String,
        required: true
    },
    strasse: {
        type: String,
        required: true
    },
    Ort: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }

}, {timestamps: true}) //
const ProductItem = mongoose.model('prodectitem', productItemSchema)


module.exports = ProductItem