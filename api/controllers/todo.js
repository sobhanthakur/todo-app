const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const checkObjectId = require("../../middleware/checkObjectId");

const todoService = require("../services/todo");

// @route    POST api/todo
// @desc     Create new Todo Task
// @access   Public

router.post(
  "/",
  [
    auth,
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

// @route    PUT api/todo
// @desc     Update a todo
// @access   Public

router.put(
  "/:id",
  [
    checkObjectId("id"),
    auth,
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

    return todoService.update(req, res);
  }
);

module.exports = router;
