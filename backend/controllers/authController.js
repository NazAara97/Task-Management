

// controllers/authController.js
export const googleAuth = (req, res, next) => {
  // This function is intentionally left blank because
  // passport.authenticate middleware handles the flow
  next();
};

export const googleAuthCallback = (req, res) => {
  // On successful authentication, redirect user to dashboard
  res.redirect('http://localhost:5173/dashboard');
};

export const authFailure = (req, res) => {
  // On authentication failure, redirect user to login
  res.redirect('http://localhost:5173/login');
};

export const logout = (req, res, next) => {
  req.logout(function(err) {
    if (err) return next(err);
    res.redirect('http://localhost:5173/login');
  });
};

