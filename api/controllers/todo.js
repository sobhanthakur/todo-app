const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const todoService = require("../services/todo");

// @route    POST api/todo
// @desc     Create new Todo Task
// @access   Public

router.post(
  "/",
  auth,
  [
    check("title", "Title must be present").not().isEmpty(),
    check("description", "Description must be present").not().isEmpty(),
    check("priority", "Priority must be present").not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // Throw Exception if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return todoService.add(req, res);
  }
);

module.exports = router;
