const express = require('express');
const router = express.Router();
const TotalWithdrawal = require('../controllers/WithdrawController');


router.post('/createWithdraw', TotalWithdrawal.createWithdraw);
router.get('/FetchWithdrawals', TotalWithdrawal.GetAllWithdrawals);
router.put('/update-withdraw-status/:id', TotalWithdrawal.updateWithdrawRequest);


module.exports = router;
