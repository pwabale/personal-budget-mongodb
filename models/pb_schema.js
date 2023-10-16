const mongoose = require('mongoose')

const pbSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    relatedValue:{
        type:Number,
        required:true
    },
    color:{
        type:"String",
        validate: {
            validator: function(value) {
              // Using a regular expression to check if the value is a valid hexadecimal color code
              return /^#([A-Fa-f0-9]{6})$/.test(value);
            },
            message: 'Color code must be a valid hexadecimal color code (e.g., "#ED4523").'
        },
        trim:true,
        uppercase:true,
        required:true
    }
},{collection:'budgets'})

module.exports = mongoose.model('budget',pbSchema)
