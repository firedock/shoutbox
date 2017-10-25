ngApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/posts', {
            templateUrl: 'pages/post.html',
            controller: 'postController'
        });
});