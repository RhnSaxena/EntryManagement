let mongoose = require('mongoose');

//Schema for VIsitor

let visitorSchema = mongoose.Schema({
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
    check_in : {
        type : Date,
        required : true
    },
    check_out : {
        type : Date,
        required : true
    },
    host_id : {
        type : String,
        required : true
    }
})

let Visitor = module.exports = mongoose.model('Visitor', visitorSchema);