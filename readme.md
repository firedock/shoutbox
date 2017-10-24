### Angular 1.5.x

Implement a directive or component using Angular 1.5.x to generate a reusable select box element that allows for the following functionality:
* Requires an Array or a Collection to populate the select box options
* Can enable/disable a blank option in the select box (meaning no selection) through an attribute
* Can provide a custom function to generate the select box option text for each element in the Array/Collection
* Can truncate long select box option text to a specified number of characters (20 by default)
* Can optionally call a parent function when a user changes the select box value 
* Generates error markup if the directive is improperly configured
* Bonus: Unit tests and conforming to a linting standard


### NodeJS / ES6
Using NodeJS and ES6, write a small Express web server that implements a simple ShoutBox application:
* Root server URI ("/") presents users with a form to enter a unique username and a button to start chatting
* Validate user's entered username to ensure it is present and unique, report back errors if not
* If user's username is present and unique, navigate to a page that provides:
    * List of current posts stored by the server (username, post, last updated date/timestamp)
    * Button to add a new posts
    * Each listed post has a button to edit an existing post
* Adding / editing a post presents a simple form for users to add new / edit existing post text with a Save or Cancel button
* Bonus: Unit tests and conforming to a linting standard


