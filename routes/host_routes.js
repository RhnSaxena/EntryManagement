var express = require('express');
var router = express.Router();

let role=require('../controllers/host_controller');

router.get('/',role.get_activity);
router.post('/',role.submit_form);

module.exports = router;
