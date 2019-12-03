var express = require('express');
var router = express.Router();

// The route has a controller 'host_controller'
let role=require('../controllers/host_controller');

// To handle the GET Request and render Host entry form. 
router.get('/',role.get_activity);

//  To handle the POST Reqest and submit the form.
router.post('/',role.submit_form);

// Exporting as module
module.exports = router;
