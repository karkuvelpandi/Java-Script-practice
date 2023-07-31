import { posts } from "./posts.js";
// Higher order function:
/*
A higher order function is a function that does at least one of the following.
  * Take one or more function as a argument (parameter).
  * Returns a function as the result.
*/

// forEach()
posts.forEach((post) => {
  console.log(post);
});
console.clear();

// filter()

const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);

// map()
const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

// reduce()
const reducedValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedValue);

// let result = null;
// for (let a of mappedPosts) {
//   result = result + a;
// }
// console.log(result);

let demoArr = [true, null, "o"];
// every() - will return true only all value inside the array is true/available.
const flag = demoArr.every((a) => {
  return a != null;
});
console.log(flag);

let demoArr2 = [true, , "o"];
// some() - will return true if any single value inside the array is true or available.
const flag2 = demoArr2.some((a) => {
  return a != null;
});
console.log(flag2);
