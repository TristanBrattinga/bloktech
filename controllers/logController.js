const passport = require('passport');

exports.loginUser = passport.authenticate('local', {
  successRedirect: '/users/profile',
  failureRedirect: '/users/login'
});

exports.logoutUser = (req, res, next) => {
  if (req.session) {
    req.logout((err) => {
      if (err) { return next(err); }
      req.session.destroy((err) => {
        console.log('session destroyed');
        res.clearCookie('connect.sid');
        res.clearCookie('sessionId');
        if (err) { return next(err); }
        res.redirect('/users/login');
      });
    });
  }
};
