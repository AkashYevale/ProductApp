const express = require('express');
const router = express.Router();
const exm = require('../services/exam');

router

.post('/get',exm.get)
.post('/create',exm.createValidate(),exm.create)
.put('/update',exm.updateValidate(),exm.update)
// .put('/changepassword',teach.passwordValidate(),user.changePassword)
// .post('/forgotpassword',teach.forgotPassword)

module.exports = router;