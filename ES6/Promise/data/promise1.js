
let employee = [{ id: 101, name: "rahul", sal: 12000 },
{ id: 102, name: "raj", sal: 13000 }]


let createEmployee = (emp) => {
     return new Promise((resolve, reject) => {
          let flag = true;
          setTimeout(() => {
               employee.push(emp)
               flag ? resolve("successfully inserted") : reject("not inserted")
          }, 3000)
     });

}
let getEmployee = () => {
     setTimeout(() => {
          let rows = ""
          /* for (emp of employee) {
              
          } */
          employee.forEach(emp => {
               rows =rows+ `<tr>
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td>${emp.sal}</td>
          </tr>`

          });
          document.getElementById("tbodyData").innerHTML = rows
     }, 1000)
}

createEmployee({ id: 103, name: "kamal", sal: 14000 })

     .then((msg) => {              //Representing success
          console.log(msg);
          getEmployee();           //when the time of exicuting only i need to call getEmployee function.
     }) 
     .catch((err) => { console.log(err); })  // Representing failure

getEmployee()