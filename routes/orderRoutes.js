const express = require('express');
const router = express.Router();
const { postOrder, getOrder} = require('../controller/orderController'); 
const authenticate = require('../middlewares/auth'); 


router.post('/postOrder', authenticate, postOrder);
router.get('/getOrder', authenticate, getOrder);


module.exports = router;