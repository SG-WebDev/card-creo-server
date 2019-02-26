var mongoose = require('mongoose');

// Setup schema
var cardSchema = mongoose.Schema({
    bgColor: {
        type: String,
        required: true
    },
    fontColor: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    logo: String,
    address: String,
    email: String,
    phone: String,
    website: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Card = module.exports = mongoose.model('card', cardSchema);

module.exports.get = function (callback, limit) {
    Card.find(callback).limit(limit);
};