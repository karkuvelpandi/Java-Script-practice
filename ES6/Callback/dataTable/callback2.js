/* let employee = [
    { id: 101, name: "Raj", sal: 200000 },
    { id: 102, name: "mari", sal: 300000 }
]
let new_employee = (emp) => {
    setTimeout(() => {
        employee.push(emp)

    }, 4000);
}

let get_employee = () => {
    setTimeout(() => {
        let row = ""
        employee.forEach(emp => {
            row += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
        });
        document.getElementById("tbodyData").innerHTML = row
    }, 1000)
}

new_employee({ id: 103, name: "vijay", sal: 400000 })
get_employee();
 */

let employee = [
    { id: 101, name: "Raj", sal: 200000 },
    { id: 102, name: "mari", sal: 300000 }
]
let new_employee = (emp, callback) => {
    setTimeout(() => {
        employee.push(emp)
        callback()
    }, 4000);
}

let get_employee = () => {
    setTimeout(() => {
        let row = ""
        employee.forEach(emp => {
            row += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
        });
        document.getElementById("tbodyData").innerHTML = row
    }, 1000)
}

new_employee({ id: 103, name: "vijay", sal: 400000 }, get_employee)
