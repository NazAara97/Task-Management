// Example authMiddleware.js

function isAuthenticated(req, res, next) {
  // Check if user is logged in/authenticated
  // Example logic:
  if (req.user) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized' });
}

module.exports = { isAuthenticated };
