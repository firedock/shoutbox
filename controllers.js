/** homeController */
ngApp.controller('homeController', ['$scope', '$location', 'userService',
    function ($scope, $location, userService) {
        $scope.username = userService.username || 'robert.flanagan';
        $scope.invalid = false;
        $scope.$watch('username', function () { // shared service
            userService.username = $scope.username; // set username
        });

        $scope.submit = () => { // validate user is present and unique
            // console.log('submit', $scope.username);
            $scope.getUser();
        };

        /** read */
        $scope.getUser = () => {
            userService.get({
                username: $scope.username
            }, function (data) {
                // pass validation
                $location.path("/posts");
            }, function (err) {
                // error handler
                console.log('error:', err);
                $scope.error = err.statusText;
                $scope.invalid = true;
            });
        };

        $scope.optionText = () => {
            console.log('optionText working');
            return 'test';
        };

        $scope.parentFn = () => {
            console.log('Can optionally call a parent function when a user changes the select box value');
        };

        $scope.food = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'Banana', 'Apple', 'Peach', 'Hot Submarine Sandwich'];
        $scope.defaultItem = 0;
    }
]);

/** postController */
ngApp.controller('postController', ['$scope', '$location', 'userService', 'postService',
    function ($scope, $location, userService, postService) {
        $scope.username = userService.username || $location.path("/");
        $scope.newPost = ''; // default post
        /** create */
        $scope.postCreate = () => {
            let payload = {
                username: $scope.username,
                text: $scope.newPost
            };
            postService.create(payload, function (data) {
                // successful
                // console.log('post created', data);
                $scope.postCollection.push(data); // add to collection in memory
            });

            $scope.newPost = ''; // clear textarea
        };
        /** read */
        $scope.getPosts = () => {
            postService.query(function (data) {
                // console.log('get posts', data);
                $scope.postCollection = data;
            });
        };
        /** edit */
        $scope.postEdit = (_id) => {
            // console.log('test',$scope.postCollection[0]._id);
            result = $scope.postCollection.filter(function (obj) {
                return obj._id == _id;
            })[0];
            $scope._id = _id;
            $scope.text = result.text;
        };

        $scope.postSave = () => {
            // console.log($scope._id);
            postService.update({
                _id: $scope._id,
                text: $scope.text
            }, function (data) {
                $scope.getPosts();
            });
        };

        $scope.getPosts(); // call on load

        /** selectbox */
        $scope.optionText = () => {
            console.log('optionText working');
            return 'test';
        };

        $scope.parentFn = () => {
            console.log('Can optionally call a parent function when a user changes the select box value');
        };

        $scope.food = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'Banana', 'Apple', 'Peach', 'Hot Submarine Sandwich'];
        $scope.defaultItem = 0;
    }
]);