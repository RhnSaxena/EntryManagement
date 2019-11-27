var express = require('express');
var router = express.Router();

let landing=require('../controllers/landing_controller');
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/',landing.redirect);

module.exports = router;
