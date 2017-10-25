ngApp.directive('post', function () {
    return {
        restrict: 'AE',
        templateUrl: 'directives/post.html',
        replace: true
    };
});

ngApp.directive('selectbox', function () {
    return {
        restrict: 'E',
        template: `<div class="form-group">
                    <select ng-model="select" ng-change="changeEvent()" >
                    <option ng-value="item" ng-repeat="item in items">{{item}}</option>
                    </select>
                  </div>`,
        replace: true,
        scope: {
            items: '=',
            defaultItem: '@',
            blankItem: '@',
            optionText: '&',
            changeEvent: '&', // Can optionally call a parent function when a user changes the select box value
            truncate: '@'
        },
        controller: function ($scope) {},
        link: function (scope, element, attrs) {

            // Can truncate option text to a specified number of characters (20 by default)
            scope.items.forEach(function (item, i) {
                if (scope.truncate && item.length > scope.truncate) {
                    scope.items[i] = item.substr(0, scope.truncate);
                } else if (item.length > 20) { // default 20
                    scope.items[i] = item.substr(0, 20);
                }
            });

            //  custom function to generate the option text for each element
            if (scope.optionText) {
                let text = scope.optionText();
                console.log('optionText', text);
            }

            // Generates error markup if the directive is improperly configured
            function isPresent(element, index, array) {
                // console.log('isPresent', element, index);
                return element;
            }

            let configured = [attrs.items, attrs.blankItem, attrs.defaultItem, attrs.optionText, attrs.changeEvent, attrs.truncate].every(isPresent);
            console.log('directive configured', configured);

            // Can enable/disable a blank option in the select box (meaning no selection) through an attribute
            if (scope.blankItem === 'true') {
                scope.items.unshift(null);
            }

            // Can select a default item
            scope.select = scope.items[scope.defaultItem];
        }
    };
});