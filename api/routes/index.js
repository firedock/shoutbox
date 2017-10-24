'use strict';
const users = require('../controllers/users');
const posts = require('../controllers/posts');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.json({
                message: 'Hello World, I am the Shoutbox API!'
            });
        });

    app.route('/users').get(users.get);
    app.route('/users/:username').get(users.getByUsername);

    app.route('/posts')
        .get(posts.get)
        .post(posts.post)
        .put(posts.put);
};