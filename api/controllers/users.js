const Users = require('../models/users.js');

module.exports = {
    get: function (req, res) {
        // console.log('get users');
        Users.find().exec()
            .then((result) => {
                res.json(result);
            })
            .catch(function (err) {
                console.log('error:', err);
            });
    },

    getByUsername: function (req, res) {
        // console.log('getByUsername');
        var username = req.params.username;
        Users.find({
                username: username
            }).exec()
            .then((result) => {
                if (result.length === 0)
                    res.status(404);

                res.json(result[0]);
            })
            .catch(function (err) {
                console.log('error:', err);
            });
    }
};