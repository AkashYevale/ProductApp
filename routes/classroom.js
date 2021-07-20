const express = require('express');
const router = express.Router();
const cls = require('../services/classroom');

router

.post('/get',cls.get)
.post('/create',cls.createValidate(),cls.create)
.put('/update',cls.updateValidate(),cls.update)
// .put('/changepassword',stud.passwordValidate(),user.changePassword)
// .post('/forgotpassword',stud.forgotPassword)

module.exports = router;