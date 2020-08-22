const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const userService = require("../services/users");

// @route    POST api/users/register
// @desc     Register user
// @access   Public

router.post(
  "/register",
  [
    check("name", "Name must be present").not().isEmpty(),
    check("email", "Please Include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or mote characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // Throw Exception if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return userService.register(req, res);
  }
);

module.exports = router;
