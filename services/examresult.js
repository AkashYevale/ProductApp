const mm = require('../utilities/dbModule');
const jwt = require('jsonwebtoken');
const { validationResult, body } = require('express-validator');

var examresult = "exam_result";
var viewExamResult = "view_" + examresult;

function reqData(req) {

    var data = {
        EXAM_ID: req.body.EXAM_ID,
        STUDENT_ID: req.body.STUDENT_ID,
        COURSE_ID: req.body.COURSE_ID,
        MARKS: req.body.MARKS,
        CLIENT_ID: req.body.CLIENT_ID
    }
    return data;
}

exports.createValidate = function () {
    return [

        body('EXAM_ID').notEmpty().withMessage('Exam_id should not be empty'),
        body('STUDENT_ID').notEmpty().withMessage('Student should not be empty'),
        body('COURSE_ID').notEmpty().withMessage('Course_id should not be empty'),
        body('MARKS').isInt().notEmpty().withMessage('Marks should not be empty'),
        
    ]
}




exports.updateValidate = function () {
    return [
        body('ID').notEmpty().withMessage('Teacher_id should not be empty'),
        body('EXAM_ID').notEmpty().withMessage('Exam_id should not be empty').optional(),
        body('STUDENT_ID').notEmpty().withMessage('Student should not be empty').optional(),
        body('COURSE_ID').notEmpty().withMessage('Course_id should not be empty').optional(),
        body('MARKS').isInt().notEmpty().withMessage('Marks should not be empty').optional(),

    ]
}




exports.get = (req, res) => {

    var pageIndex = req.body.pageIndex ? req.body.pageIndex : '';

    var pageSize = req.body.pageSize ? req.body.pageSize : '';
    var start = 0;
    var end = 0;

    console.log(pageIndex + " " + pageSize)
    if (pageIndex != '' && pageSize != '') {
        start = (pageIndex - 1) * pageSize;
        end = pageSize;
        console.log(start + " " + end);
    }

    let sortKey = req.body.sortKey ? req.body.sortKey : 'ID';
    let sortValue = req.body.sortValue ? req.body.sortValue : 'DESC';
    let filter = req.body.filter ? req.body.filter : '';

    let criteria = '';

    if (pageIndex === '' && pageSize === '')
        criteria = filter + " order by " + sortKey + " " + sortValue;
    else
        criteria = filter + " order by " + sortKey + " " + sortValue + " LIMIT " + start + "," + end;

    let countCriteria = filter;
    var supportKey = req.headers['supportkey'] ? req.headers['supportkey'] : '';
    try {
        mm.executeDQL('select count(*) as cnt from ' + viewExamResult + ' where 1 ' + countCriteria, [], supportKey, (error, results1) => {
            if (error) {
                console.log(error);
                res.send({
                    "code": 400,
                    "message": "Failed to get result count.",
                });
            }
            else {
                console.log(results1);
                mm.executeDQL('select * from ' + viewExamResult + ' where 1 ' + criteria, [], supportKey, (error, results) => {
                    if (error) {
                        console.log(error);
                        res.send({
                            "code": 400,
                            "message": "Failed to get result information."
                        });
                    }
                    else {
                        res.send({
                            "code": 200,
                            "message": "success",
                            "count": results1[0].cnt,
                            "data": results
                        });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
    }

}

exports.create = (req, res) => {
    var data = reqData(req);
    const errors = validationResult(req);
    var supportKey = req.headers['supportkey'] ? req.headers['supportkey'] : '';

    if (!errors.isEmpty()) {

        console.log(errors);
        res.send({
            "code": 422,
            "message": errors.errors
        });
    }
    else {
        try {
             mm.executeDQL('INSERT INTO ' + examresult + ' SET ?', data, supportKey, (error, results) => {
               if (error) {
                  console.log(error);
                  res.send({
                    "code": 400,
                    "message": "Failed to save result information..."
                   });
               }
               else {
                    console.log(results);
                    res.send({
                        "code": 200,
                        "message": "result information saved successfully...",
                        "data": [{ ID: results.insertId }]
                        });
                 }
            });
            
        } catch (error) { console.log(error); }
    }
}


exports.update = (req, res) => {
    const errors = validationResult(req);
    //console.log(req.body);
    var data = reqData(req);
    var supportKey = req.headers['supportkey'] ? req.headers['supportkey'] : '';
    var criteria = {
        ID: req.body.ID
    };
    var systemDate = mm.getSystemDate();
    var setData = "";
    var recordData = [];


    Object.keys(data).forEach(key => {
        data[key] ? setData += `${key}= ? , ` : true;
        data[key] ? recordData.push(data[key]) : true;
    });

    if (!errors.isEmpty()) {
        console.log(errors);
        res.send({
            "code": 422,
            "message": errors.errors
        });
    }
    else {
        try {
            mm.executeDQL(`UPDATE ` + examresult + ` SET ${setData} CREATED_MODIFIED_DATE = '${systemDate}' where ID = ${criteria.ID} `, recordData, supportKey, (error, result2) => {
                if (error) {
                    console.log(error);
                    res.send({
                        "code": 400,
                        "message": "Failed to update result information."
                    });
                }
                else {
                    console.log(result2);
                    res.send({
                        "code": 200,
                        "message": "result information updated successfully...",
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}










