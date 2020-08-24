const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get the token from the header
  const token = req.header("Authorization");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token present" });
  }

  // Check if token format is valid
  const tokenString = token.split(" ");

  if (tokenString.length !== 2 || tokenString[0] !== "Bearer") {
    return res.status(401).json({ msg: "Invalid Auth Format" });
  }

  try {
    // Decode and verify the jwt token
    const decoded = jwt.verify(tokenString[1], process.env.jwtSecret);

    // Set user payload in the req object
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
