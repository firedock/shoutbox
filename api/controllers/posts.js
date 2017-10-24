const Posts = require('../models/Posts.js');

module.exports = {
    post: function (req, res) {
        Posts(req.body).save() // returns a promise
            .then(
                function (result) {
                    res.json(result);
                })
            .catch(function (err) {
                console.log('error:', err);
            });
    },

    get: function (req, res) {
        Posts.find().exec()
            .then((result) => {
                res.json(result);
            })
            .catch(function (err) {
                console.log('error:', err);
            });
    },

    getById: function (req, res) {
        var id = req.params.id;
        Posts.findById({
                _id: id
            }).exec()
            .then((result) => {
                res.json(result[0]);
            })
            .catch(function (err) {
                console.log('error:', err);
            });
    },

    put: function (req, res) {
        var id = req.body._id;
        console.log('putPost',req.body);
        Posts.findByIdAndUpdate({
                _id: id
            }, {
                $set: req.body
            }).exec()
            .then((result) => {
                res.json(result);
            })
            .catch(function (err) {
                console.log('error:', err);
            });
    }
};