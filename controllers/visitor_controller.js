let Visitor = require('../models/visitors');
let hostmailer = require('./hostmailer');

// This function will render the page along with 
// the data about Hosts available
exports.get_activity=function(req, res, next){
    var dataObject;
    // Call a function to fetch data from database
    let fetch_db=require('../controllers/populate_hostlist');
    fetch_db.asyncFind((err, data)=>{
        res.render('./visitor_form',{"title":"Visitor",data:data})   
    })
}

// This will be invoked after submitting the visitor entry form.
// To enter the visitor document in the database.
exports.submit_form=function(req, res, next){
    // Current time
    var time = Date();
    // Check-in and Check-out time will have the same value.
    // Check-out time will be updated on check-out
    // The visitors with same value of check-in and check-out will be considered to be in meeting.
    var newVisitor = {
        name: req.body.v_name,
        email: req.body.v_email,
        phoneno: req.body.v_phno,
        check_in: time,
        check_out: time,
        host_id: req.body.vh_name
    };

    // Adding to the database the visitor document as per Visitors model defined.
    Visitor.create(newVisitor,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            // Sending the mail to the host informing the appointment.
            hostmailer.sendMail(req,(err)=>{
                if(err){
                    console.log("Error while sending mail");
                }else{
                    console.log("Mail Sent");
                }
            });
        }
    })
     // Rendering the submission page.
     res.render('submission', { 
        title: 'Visitor Registered',
        content: 'Your appointment has been successfully booked.'
    });
}

// Rendering the page to search for visitor.
exports.search_for_visitor=function(req, res, next){
    res.render('./active_visitors',{"title":"Visitor"}) ;
}

// To Fetch the visitor document from database by name
exports.get_by_name=function(req, res, next){
    // A function to fetch database.
    let fetch_db=require('../controllers/populate_active_visitors');
    var visitorName=req.body.visitor_name;
    if(visitorName==''){
        visitorName='NA';
    }
    fetch_db.asyncFind((err, data)=>{
        res.render('./visitor_checkout',{
            title : "Visitors",
            data:data, 
            req_name : visitorName
        });   
    })
}

// Perform check-out for the chosen visitor
exports.checkout=function(req, res, next){
    let visitorCheckout=require('./visitorCheckout');
    var visitor_id = req.body.visitor_id;
    // A function that will update the check-out time and set it to current time.
    visitorCheckout.updateCheckOut(visitor_id, (err, data)=>{
        if(err){
            console.log(err);
        }else{
            // Rendering the page as per the case
            res.render('./submission.ejs',{
                title : "Check Out",
                content : "You have checked out successfully. Have a nice day!"
            });
        }
    })
}