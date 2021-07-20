create database collegewebsite;
use collegewebsite;

SET SQL_SAFE_UPDATES=0;
drop table feedback_master;
drop view new_view;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for COURSE_MASTER
-- ----------------------------
DROP TABLE IF EXISTS `course_master`;
CREATE TABLE `course_master`  (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `COURSE_ID` int(11) NOT NULL,
    `COURSE_NAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`DURATION` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `FEE` int(11) NOT NULL,
    `ELIGIBILITY` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `CREATED_MODIFIED_DATE` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `READ_ONLY` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N',
    `ARCHIVE_FLAG` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'F',
	 `CLIENT_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;




-- ----------------------------
-- Table structure for PLACEMENT_MASTER
-- ----------------------------
DROP TABLE IF EXISTS `placement_master`;
CREATE TABLE `placement_master`  (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `PLACEMENT_ID` int(11) NOT NULL,
    `STUDENT_NAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`CLASS` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `YEAR` datetime(0) NULL DEFAULT NULL,
    `COMPANY_NAME` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `CREATED_MODIFIED_DATE` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `READ_ONLY` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N',
    `ARCHIVE_FLAG` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'F',
	 `CLIENT_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;






-- ----------------------------
-- Table structure for FACULTY_MASTER
-- ----------------------------
DROP TABLE IF EXISTS `faculty_master`;
CREATE TABLE `faculty_master`  (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `FACULTY_ID` int(11) NOT NULL ,
	`FACULTY_NAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`DEPARTMENT` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `DESIGNATION` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `QUALIFICATION` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `MOBILE_NO` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `CREATED_MODIFIED_DATE` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `READ_ONLY` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N',
    `ARCHIVE_FLAG` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'F',
	 `CLIENT_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;





-- ----------------------------
-- Table structure for FEEDBACK_MASTER
-- ----------------------------
DROP TABLE IF EXISTS `feedback_master`;
CREATE TABLE `feedback_master`  (
    `ID` int(11) NOT NULL AUTO_INCREMENT,
    `FEEDBACK_ID` int(11) NOT NULL ,
	`NAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`EMAIL` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `CONTACT_NO` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `COLLEGE_NAME` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `COURSE_NAME` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `YEAR` varchar(75) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `SUGGESTION` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `CREATED_MODIFIED_DATE` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `READ_ONLY` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N',
    `ARCHIVE_FLAG` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'F',
	 `CLIENT_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;



--  --------------------------------------------insert data ----------------------------------------------------
INSERT INTO `course_master` VALUES (1, 1,'BCA','3 year',20000,'12th pass', '2021-03-11 13:02:54', 'N', 'F', 1);
INSERT INTO `course_master` VALUES (2, 2,'BBA','3 year',18000,'12th pass', '2021-03-11 13:02:54', 'N', 'F', 1);

INSERT INTO `placement_master` VALUES (2, 2,'Amit Hajare','BCA 3','2021-04-10','TCS', '2021-03-11 13:02:54', 'N', 'F', 1);
INSERT INTO `placement_master` VALUES (1, 1,'Onkar Mali','MCA 3','2021-01-15','TCS', '2021-03-11 13:02:54', 'N', 'F', 1);

INSERT INTO `faculty_master` VALUES (1, 1,'R.S.pujari','computer','Phd','HOD','9598751548', '2021-03-11 13:02:54', 'N', 'F', 1);
INSERT INTO `faculty_master` VALUES (2, 2,'A.S.mulla','computer','Phd','Professor','9895478001', '2021-03-11 13:02:54', 'N', 'F', 1);

INSERT INTO `feedback_master` VALUES (1, 1,'Amit Hajare','amit100@gmail.com','9960404290','IMRDA','BBA','TY','all is well','2021-03-11 13:02:54', 'N', 'F', 1);   
INSERT INTO `feedback_master` VALUES (2, 2,'Onkar Mali','onkar@gmail.com','9875154201','IMRDA','BCA','SY','parking facility not good','2021-03-11 13:02:54', 'N', 'F', 1);   



















