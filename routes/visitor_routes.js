var express = require('express');
var router = express.Router();

let role=require('../controllers/visitor_controller');
/* GET users listing. */
router.post('/',role.get_activity);
module.exports = router;
