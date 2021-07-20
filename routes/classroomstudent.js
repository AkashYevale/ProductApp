const express = require('express');
const router = express.Router();
const clsstud = require('../services/classroomstudent');

router

.post('/get',clsstud.get)
.post('/create',clsstud.createValidate(),clsstud.create)
.put('/update',clsstud.updateValidate(),clsstud.update)
// .put('/changepassword',stud.passwordValidate(),user.changePassword)
// .post('/forgotpassword',stud.forgotPassword)

module.exports = router;