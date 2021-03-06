var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/auth/check',
    failureRedirect : '/auth/signup'
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/auth/check',
    failureRedirect : '/auth/login'
}));
router.get('/check', isLoggedIn, (req, res) => {
    res.status(200).json(req.user);
});
router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    res.status(200).json({
        'message': 'Successfully Logout'
    });
});

module.exports = router;

//route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.status(200).json({
            'message': 'Access Denied',
        });
    }
}