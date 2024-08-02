const express = require("express");
/**
 * Controls student related endpoints
 */
const router = express.Router();
const studentController = require("../../controllers/admin/student.controller");
const {
  authMiddleware,
} = require("../../middlewares/authentication.middleware");
const { isAdmin } = require("../../middlewares/authorization.middleware");
const validate = require("../../middlewares/validation.middleware");

// Account and Student model CRUD
router.get(
  "/", 
  authMiddleware, 
  isAdmin, 
  studentController.studentList
);
router.post(
  "/", 
  authMiddleware, 
  isAdmin, 
  studentController.studentCreate
);
router.get(
  "/:id", 
  authMiddleware, 
  isAdmin, 
  studentController.studentView
);
router.put(
  "/:id", 
  authMiddleware, 
  isAdmin, 
  studentController.studentUpdate
);
router.delete(
  "/:id", 
  authMiddleware, 
  isAdmin, 
  studentController.studentDelete
);

module.exports = router;
