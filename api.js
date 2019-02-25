// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API works fine',
        message: 'Welcome to CardCreo Server!',
    });
});
// Export API routes
module.exports = router;