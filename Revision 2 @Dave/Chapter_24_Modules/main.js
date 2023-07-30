// Js module introduced in ES6-2015
/*
We need to add type="module" attributes to our <script></script> tag inside
our html file and that lets js to know we are going to use modules.

And it is automatically implies 'defer' keyword to prevent the <script></script>
to load before the html.

And its also applies strict mode to our javascript ("use strict")
*/

// Default import
import play from "./guitars.js";
console.log(play());

// Named import
import { pause, resume } from "./guitars.js";
console.log(pause());
console.log(resume());

// Importing all from the particular file.

import * as Guitars from "./guitars.js";
// console.log(Guitars.play()); // uncaught TypeError Guitars.play() not a function.
// This is happening because we are exported that particular function as
// default so we need to use default() keyword instead of the function name.

console.log(Guitars.default());
console.log(Guitars.pause()); // we can use function names as usual for named exported items
console.log(Guitars.resume());

// Example for class
import User from "./User.js";
const me = new User("pk", "pk@gmail.com");
console.log(me); //User {_name: 'pk', _id: 'pk@gmail.com'}
me.greeting(); //Hi, this is pk

// Conclusion:
// So better use named export always instead of default export and import.
