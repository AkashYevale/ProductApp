const express = require('express');
const router = express.Router();
const par = require('../services/parent');

router

.post('/get',par.get)
.post('/create',par.createValidate(),par.create)
.put('/update',par.updateValidate(),par.update)
// .put('/changepassword',par.passwordValidate(),par.changePassword)
// .post('/forgotpassword',par.forgotPassword)

module.exports = router;