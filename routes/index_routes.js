var express = require('express');
var router = express.Router();
// This route has a controller named 'landing_controller'
let landing=require('../controllers/landing_controller');

/* GET home page. */
router.get('/', landing.get_landing);
/* To handle the POST request on this route */
router.post('/',landing.redirect);

//  Exporting as module.
module.exports = router;
