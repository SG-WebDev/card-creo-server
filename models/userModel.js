const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    hash: String,
    salt: String,
});

const User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
};