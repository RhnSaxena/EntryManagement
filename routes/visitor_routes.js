var express = require('express');
var router = express.Router();
// Import the controller to handle the requests.
let role=require('../controllers/visitor_controller');

// To render the visitor entry form.
router.get('/',role.get_activity);

// To submit the visitor form and add it to database.
router.post('/',role.submit_form);

// To search for active visitors.
router.get('/active',role.search_for_visitor);

// To fetch the database to find a active visitor by name.
router.post('/active',role.get_by_name);

// To perform check-out operation for a visitor.
router.post('/checkout',role.checkout);

module.exports = router;
