ngApp.service('userService', ['$resource', function ($resource) {
    this.username = '';
    return $resource('http://localhost:3000/users' + this.path, {}, {
        query: {
            method: "GET",
            isArray: true
        },
        get: {
            method: "GET",
            url: 'http://localhost:3000/users/:username'
        },
        create: {
            method: "POST" // if user does not exist
        },
    });
}]);

ngApp.service('postService', ['$resource', function ($resource) {
    return $resource('http://localhost:3000/posts', {}, {
        query: {
            method: "GET",
            isArray: true
        },
        create: {
            method: "POST"
        },
        get: {
            method: "GET"
        },
        remove: {
            method: "DELETE"
        },
        update: {
            method: "PUT",
            url: 'http://localhost:3000/posts/:id'
        }
    });
}]);