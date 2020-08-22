const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const userService = require("../services/users");

const auth = require("../../middleware/auth");

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

// @route    POST api/users/login
// @desc     Login user
// @access   Public

router.post(
  "/login",
  [
    check("email", "Please Include a valid email").isEmail(),
    check("password", "Please enter a password").exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // Throw Exception if validation fails
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return userService.login(req, res);
  }
);

// @route    PUT api/users/password
// @desc     Change user password
// @access   Public

router.put(
  "/password",
  [
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

    return userService.changePassword(req, res);
  }
);

// @route    GET api/users
// @desc     Get User details
// @access   Public

router.get("/", auth, (req, res) => {
  return userService.userDetails(req, res);
});

module.exports = router;
