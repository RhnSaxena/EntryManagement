let mongoose = require('mongoose');

//Schema for Host

let hostSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneno : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

let Host = module.exports = mongoose.model('Host', hostSchema);