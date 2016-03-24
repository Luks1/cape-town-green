---
layout: default
---

![](/img/first-function.jpg)

## First function

Write a function called `keyCodeName` in the `app.js` file.  It takes in a key code and returns the name of the key that match the key code.

It should support the up, down, left and right arrow key codes. It should return blank for all other key codes.

The key codes are:

 key code   | key name
-----------|-----------
37         | left
38         | up
39         | right
40         | down            

Open the [unit test](http://localhost:8080/tests.html) page and make sure the `keyCodeName` tests are passing. You'll need to refresh the page if you already have it open in your browser.

## Capture key codes

To capture keystrokes we need to add an event handler (function) to the body of the html document's `onkeydown` event. There's already an event handler for `onkeydown` in the `app.js` file, but it's not doing anything yet. This event handler will be called whenever a key is pressed.

The nice people of codeX have created some functions for you in the `support.js` file to make your live easier. It has already been included for you. One of them is `displayMessage` which you can use to display a message on the web page.

### Display the key code

Use the `displayMessage` function to display the key code on the screen like this: `displayMessage(e.keyCode);`. Add your code to the `app.js` file inside of the `onkeydown` event handler.

### Display the key name

Now update your code to display the key names instead of the key codes. Use your `keyCodeName` function.
