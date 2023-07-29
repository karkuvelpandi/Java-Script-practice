// Web storage API

// It is not part of the DOM-refer to the window API.
// Available to javascript via global variable

// We don't have to type window.It is implied both are same as like below example.
// Example :
// window.alert("WebStorage");
// alert("WebStorageAPI");
// window.alert(window.location);
// alert(location);

// Accessing localStorage and sessionStorage.
// syntax: window.localStorage/window.sessionStorage Or localStorage/sessionStorage

// Example:
const myObj = {
  name: "karkuvel",
  logName: function () {
    // FIXME: solve why arrow function is console empty name.
    // Solution: In arrow function this refers to the global object
    // In other hand normal function expression this refers to the current object.
    console.log(this.name);
  },
};
const myArr = ["eat", "sleep", "code", "trade"];
// myObj.logName();// karkuvel

// sessionStorage : only keeping the data during the session.
sessionStorage.setItem("session1", myObj);
sessionStorage.setItem("session2", myArr);

const data = sessionStorage.getItem("session1");
const arrData = sessionStorage.getItem("session2");
console.log(data); //output : [object Object] ....this is not we want.
console.log(arrData); //output : eat,sleep,code,trade ......two different outputs

console.log(typeof data);
console.log(typeof arrData); //Both are string.

// Conclusion :
// what ever the data is we need to convert that into string first by using JSON.stringify() inbuilt method.
// While retrieving time we need to parse the data to convert the string to desired format same before the storing.
sessionStorage.setItem("session1", JSON.stringify(myObj));
sessionStorage.setItem("session2", JSON.stringify(myArr));

const data1 = sessionStorage.getItem("session1");
const arrData1 = sessionStorage.getItem("session2");
console.log(data1);
console.log(arrData1); // Both strings

// Desired format same before storing.
console.log(JSON.parse(data1));
console.log(JSON.parse(arrData1));

/*
Both session and local storages are working same when comes to set and getting the item.
the only different is sessionStorage will be erased after closing the tab or browser (end of the session)
But on the other hand the localStorage data will not be erased automatically until we manually delete it.
 */

// Web Storage inbuilt methods

// Removing single data.
localStorage.removeItem("storeKeyName");

// Clear all local storage for the particular site or domain.
// localStorage.clear();

// We can access the store key name itself (name of the data string)
// by using key() method with position value.
const name = localStorage.key(0);
console.log(name); // null because we cleared the whole store.

// There is another method used to find out the count of the available store data.
const l = localStorage.length;
console.log(l); // 0

//******************************************************************* */

// Todo revise using the localStorage
const submitData = () => {
  event.preventDefault();
  const task = document.getElementById("task").value;
  const taskError = document.getElementById("taskError");
  const status = document.getElementById("status").value;
  const statusError = document.getElementById("statusError");
  if (!task) {
    taskError.textContent = "Please fill the field";
  }
  if (!status) {
    statusError.textContent = "Please select the field";
  }
  if (task && status) {
    const taskObj = {
      task,
      status,
    };
    const availableTasks = JSON.parse(localStorage.getItem("task"));
    if (availableTasks) {
      localStorage.setItem(
        "task",
        JSON.stringify([...availableTasks, taskObj])
      );
      taskData();
    } else {
      localStorage.setItem("task", JSON.stringify([taskObj]));
      taskData();
    }
  }
};

const taskData = () => {
  const data = JSON.parse(localStorage.getItem("task"));
  let element = "";
  if (data) {
    data.map((a) => {
      element =
        element +
        `<tr>
          <td>${a.task}</td>
          <td>${a.status}</td>
        </tr>`;
    });
    document.getElementById("tableData").innerHTML = element;
  }
};
