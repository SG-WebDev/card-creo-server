// Import contact model
Card = require('./cardModel');
// Handle index actions
exports.index = function (req, res) {
    Card.get(function (err, cards) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Cards retrieved successfully",
            data: cards
        });
    });
};
// Handle create card actions
exports.new = function (req, res) {
    var card = new Card();
    card.bgColor = req.body.bgColor;
    card.fontColor = req.body.fontColor;
    card.logo = req.body.logo;
    card.name = req.body.name;
    card.address = req.body.address;
    card.email = req.body.email;
    card.phone = req.body.phone;
    card.website = req.body.website;
// Save the card and check for errors
    card.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New card created!',
            data: card
        });
    });
};
// Handle view card info
exports.view = function (req, res) {
    Card.findById(req.params.card_id, function (err, card) {
        if (err)
            res.send(err);
        res.json({
            message: 'Card details loading..',
            data: card
        });
    });
};
// Handle update card info
exports.update = function (req, res) {
    Card.findById(req.params.card_id, function (err, card) {
        if (err)
            res.send(err);
        card.bgColor = req.body.bgColor;
        card.fontColor = req.body.fontColor;
        card.logo = req.body.logo;
        card.name = req.body.name;
        card.address = req.body.address;
        card.email = req.body.email;
        card.phone = req.body.phone;
        card.website = req.body.website;
// save the card and check for errors
        card.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Card info updated',
                data: card
            });
        });
    });
};
// Handle delete card
exports.delete = function (req, res) {
    Card.remove({
        _id: req.params.card_id
    }, function (err, card) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Card deleted'
        });
    });
};