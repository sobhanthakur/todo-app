const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const constants = require("../../constants/generalConstants");

/*
 * Register User
 */
const register = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    // See if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "user already exists" }] });
    }

    // Create new User
    user = new User({
      name,
      email,
      password,
    });

    // Encrypt users password using bcrypt
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    // Save to DB (Commit)
    await user.save();

    // Retun JWT - Users straight away logs in if user is registered successfully
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: constants.token_expiry,
      },
      (err, token) => {
        if (err) {
          throw err;
        } else {
          res.status(201).json({ token });
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }

  return res;
};

/*
 * Login User
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // See if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    // Validate Credentials
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    // Retun JWT - Users straight away logs in if user is registered successfully
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) {
          throw err;
        } else {
          res.status(201).json({ token });
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }

  return res;
};

module.exports = { register, login };
