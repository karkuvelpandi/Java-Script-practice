const view1 = document.getElementById("view1");
console.log(view1); //It will give us the whole element tree. <section id="view1" class="view1">...</section>

const view2 = document.querySelector("#view2");
console.log(view2); //<section id="view1" class="view1">...</section>

// view1.style.display = "none"; //This will hide the view1

//Another way of doing...

const elements = document.getElementsByClassName("elements");
console.log(elements); //HTMLCollection(12) [div.elements,..., div.elements]
// same element
const elements2 = document.querySelectorAll(".elements");
console.log(elements2); //NodeList(12) [div.elements,..., div.elements]

// HTML Collection : Has HTML element inside that.
// NodeList : Has elements,text,and comments,etc,. inside that.

const divs = view1.querySelectorAll("div");
console.log(divs); //NodeList(12) [div.elements,..., div.elements]
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs); //HTMLCollection(12) [div.elements,..., div.elements]

const evenDivNodes = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivNodes);

/*
NodeList:
1. A node list contain any type of node, such us element, text nodes, comments,etc,.
   It returns by methods like "childNodes" & "querySelectorAll".

2. A NodeList is a live collection, Which means it is automatically when the underlying DOM changes.
   For example if you add or remove nodes that match the criteria used to create the "NodeList",
   it will automatically updated.

HTMLCollection:
1. HTML collections specifically contains element nodes. It is typically returned by properties like
   "getElementById, getElementByTagName, getElementByClassName".
2. HTML collections is also a live collection,  but it is automatically updated only in some cases. 
   For example is you use "getElementByTagName" and then add or remove element that match the tagName, the
   HTML collections will be updated, However if you use "getElementsByClassName" it will not be updated
   if we add or remove elements with the specific className.
*/

/* If we specifically need to work with element nodes (or) require dynamic updates, 
Its recommended to use "HTMLCollection" and "NodeList" respectively.
*/

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs); //NodeList(6) [div.elements,..., div.elements]

// Manipulating the selected divs
// for (let i = 0; i < evenDivs.length; i++) {
//   evenDivs[i].style.backgroundColor = "darkblue";
//   evenDivs[i].style.width = "200px";
//   evenDivs[i].style.height = "200px";
// }

const navText = document.querySelector("nav h1");
console.log(navText); //<hl>l need a cook</hl>
navText.textContent = "I need a cook";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Modified Header</h1><p>Modified text</p>`;
console.log(navbar);
navbar.style.display = "flex";
navbar.style.justifyContent = "center";

// *************************************************
// Targeting the particular node.

console.log(evenDivNodes[0]); //<div class="elements">2</div>
console.log(evenDivNodes[0].parentElement); //<section id="view1" class="view1">...</section>
console.log(evenDivNodes[0].parentElement.children); //only elements-HTMLCollection(12) [div.elements,..., div.elements]
console.log(evenDivNodes[0].parentElement.childNodes); //NodeList(25) [text, div.elements, div.elements, text]
console.log(evenDivNodes[0].parentElement.hasChildNodes()); // true
console.log(evenDivNodes[0].parentElement.lastChild); //#text
console.log(evenDivNodes[0].parentElement.lastElementChild); //<div class="elements">12</div>
console.log(evenDivNodes[0].parentElement.firstChild);
console.log(evenDivNodes[0].parentElement.firstElementChild);
console.log(evenDivNodes[0].nextSibling); //#text
console.log(evenDivNodes[0].nextElementSibling); //<div class="elements">3</div>
console.log(evenDivNodes[0].previousSibling); //#text
console.log(evenDivNodes[0].previousElementSibling); //<div class="elements">1</div>

// We can use all together to select any element but don't make it too complicate
// but we can use like (console.log(evenDivNodes[0].nextElementSibling.nextElementSibling))

// while (view1.lastChild) {
//   view1.lastChild.remove();
// }
// Here not only we are remove the element but the whole node.

// ***********************************************************
// Adding new element with content.

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "2px solid red";
  newDiv.style.display = "flex";
  newDiv.style.flexWrap = "wrap";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.appendChild(newDiv);
};

for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}
