const express = require('express');
const router = express.Router();
const teach = require('../services/teacher');

router

.post('/get',teach.get)
.post('/create',teach.createValidate(),teach.create)
.put('/update',teach.updateValidate(),teach.update)
// .put('/changepassword',teach.passwordValidate(),user.changePassword)
// .post('/forgotpassword',teach.forgotPassword)

module.exports = router;