const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // eslint-disable-next-line prefer-destructuring
  const token = req.cookies.token; // The JWT is stored in the 'token' cookie

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID to the request for further use
    req.authenticatedUserId = decoded.userId;

    return next(); // Add a return statement here
  } catch (error) {
    // console.error(error);
    return res.status(401).send("Unauthorized");
  }
};

module.exports = authenticateUser;
