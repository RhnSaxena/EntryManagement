var express = require('express');
var router = express.Router();

let role=require('../controllers/visitor_controller');
/* GET users listing. */
router.get('/',role.get_activity);
router.post('/',role.submit_form);
router.get('/active',role.get_active_visitors);
module.exports = router;
