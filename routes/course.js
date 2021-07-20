const express = require('express');
const router = express.Router();
const cou = require('../services/course');

router

    .post('/get', cou.get)
    .get('/create', cou.createValidate(), cou.create)
    .put('/update', cou.updateValidate(), cou.update)
// .put('/changepassword',stud.passwordValidate(),user.changePassword)
// .post('/forgotpassword',stud.forgotPassword)

module.exports = router;