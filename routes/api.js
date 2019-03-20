// Initialize express router
var express = require('express');
var router = express.Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API works fine',
        message: 'Welcome to CardCreo Server!',
    });
});
// Import contact controller
var cardController = require('../controllers/cardController');
// Contact routes
router.route('/cards/:userID')
    .get(cardController.index);
router.route('/card')
    .post(cardController.new);
router.route('/card/:card_id')
    .get(cardController.view)
    .put(cardController.update)
    .delete(cardController.delete);

// Export API routes
module.exports = router;