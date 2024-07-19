const express = require('express');
const router = express.Router();
const totalOrdersController = require('../controllers/orderController');


router.post('/createorder', totalOrdersController.createTotalOrder);
router.get('/FetchOrders', totalOrdersController.GetAllOrders);
router.put('/update-order-status/:id', totalOrdersController.updateOrderStatus);


module.exports = router;
