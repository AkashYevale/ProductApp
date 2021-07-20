const express = require('express');
const router = express.Router();
const stud = require('../services/student');

router

.post('/get',stud.get)
.post('/create',stud.createValidate(),stud.create)
.put('/update',stud.updateValidate(),stud.update)
// .put('/changepassword',stud.passwordValidate(),user.changePassword)
// .post('/forgotpassword',stud.forgotPassword)

module.exports = router;