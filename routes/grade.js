const express = require('express');
const router = express.Router();
const grd = require('../services/grade');

router

.post('/get',grd.get)
.post('/create',grd.createValidate(),grd.create)
.put('/update',grd.updateValidate(),grd.update)
// .put('/changepassword',stud.passwordValidate(),user.changePassword)
// .post('/forgotpassword',stud.forgotPassword)

module.exports = router;