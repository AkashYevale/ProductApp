const express = require('express');
const router = express.Router();
const exmr = require('../services/examresult');

router

.post('/get',exmr.get)
.post('/create',exmr.createValidate(),exmr.create)
.put('/update',exmr.updateValidate(),exmr.update)
// .put('/changepassword',teach.passwordValidate(),user.changePassword)
// .post('/forgotpassword',teach.forgotPassword)

module.exports = router;