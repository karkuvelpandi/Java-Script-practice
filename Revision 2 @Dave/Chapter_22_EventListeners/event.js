/* Sometime <script></script> tag will not work in the header section for that
we can place the <script></script> tag just before the </body> closing.

Or 

We can use "defer" attribute to load the <script> tag can load the script first before other UI

*/

// Javascript Event Listeners

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h1 = view.querySelector("h1");

// syntax : addEventListener("event",function,useCapture)

const doSomething = () => {
  alert("hello...!");
};

// h1.addEventListener("click", doSomething, false); //Here false for useCapture is default no need to mention.

// Event listener with anonymous function.
// h1.addEventListener("click", (event) => {
//   event.target.textContent = "Clicked";
// });

// How to know the dom and the whole page is fully loaded.

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState:completed");
    // initApp();
    // initApp2();
    initApp3();
  }
});
/* This set of code with initApp() function means is after loading
all dom and page we are starting interacting with the dom.
*/

// Example for initApp()

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h1 = div.querySelector("h1");
  view.addEventListener("click", () => {
    view.style.backgroundColor = "yellow";
  });
  div.addEventListener("click", () => {
    div.style.backgroundColor = "green";
  });
  h1.addEventListener("click", (event) => {
    event.target.textContent = "Clicked";
    h1.style.color = "white";
  });
};

/* When we click the "h1" element, all three events will get trigger.
This happens because of the event bubbling.
*/
// What is useCapture and how is relates with the event bubbling.
// Example
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  true
);
child.addEventListener("click", () => {
  console.log("child Clicked");
});

/*
Here if we click on the "child" element, the event listeners will be
triggered in the capturing phase first because the useCapture parameter
is set to 'true' for the parent listener, so the output will be

If useCapture is true output: parent clicked , child clicked.

If the "useCapture" value to "false" or omit it, the event listener will
be triggered in the bubbling phase, resulting the following output.

child clicked
parent clicked .....same as normal bubbling.
*/

// ****************************************************
// Same example with useCapture:true & event.stopPropagation()

// Example

const initApp2 = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h1 = div.querySelector("h1");
  view.addEventListener(
    "click",
    () => {
      view.style.backgroundColor = "yellow";
    },
    true
  );
  div.addEventListener(
    "click",
    (event) => {
      div.style.backgroundColor = "green";
    },
    true
  );
  h1.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      /*Don't get confused here...  normally stopPropagation restrict the bubbling which coming
from the child element to the parent element.

Here we are using useCapture so it work revered way like useCapture from parent to child.
*/
      event.target.textContent = "Clicked";
      h1.style.color = "white";
    },
    true
  );
};

/************************************************************************** */
// Same example with event.target and How it act when we use event bubbling.

// Example:
const initApp3 = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h1 = div.querySelector("h1");
  view.addEventListener("click", (event) => {
    console.log("Bubbling end at main view");
    event.target.style.backgroundColor = "purple";
  });
  div.addEventListener("click", (event) => {
    console.log("Bubbling");
    event.target.style.backgroundColor = "red";
  });
  h1.addEventListener("click", (event) => {
    console.log("Bubbling start at h1");
    event.target.textContent = "clicked event";
  });
};
// If i click h1 then the event will be stored as h1 even though the bubbling is happen
// and the events are running the event is going to be the clicked element only.

// Example for adding the className to the element using listeners.
const section = document.getElementById("classList");
section.addEventListener("click", () => {
  // section.classList.remove("darkBlue");
  // section.classList.add("purple");
  // instead of above two line if we want to toggle back and forth we can use toggle()
  section.classList.toggle("purple");
  section.classList.toggle("darkBlue");
});

// Example: manipulating the nav size
// FIXME : Resolve and learn this behavior. when hover over the elements inside the nav event is not working.
const nav = document.getElementById("navbar");
nav.addEventListener("mouseover", (event) => {
  // event.target.className = "heightChange";
  event.target.classList.add("heightChange");
});
nav.addEventListener("mouseout", (event) => {
  event.target.classList.remove("heightChange");
});

// Example for event.preventDefault()

const view3 = document.querySelector("#view3");
const myForm = view3.querySelector("#myForm");
myForm.addEventListener("submit", (event) => {
  console.log("event submitting"); //without event.preventDefault() the page will reload after every submission.
  event.preventDefault(); //Its not particular for form this is actually used to restrict default behavior of an html tag.
});
