let employee = [{"id":1,"name":"Frederico","salary":"$10457.65"},
{"id":2,"name":"Othilie","salary":"$20669.88"},
{"id":3,"name":"Vlad","salary":"$25678.58"},
{"id":4,"name":"Tamara","salary":"$18656.70"},
{"id":5,"name":"Goldia","salary":"$13011.34"},
{"id":6,"name":"Marne","salary":"$10834.45"},
{"id":7,"name":"Joella","salary":"$23494.54"},
{"id":8,"name":"Dorthy","salary":"$25112.15"},
{"id":9,"name":"Carmita","salary":"$25815.52"},
{"id":10,"name":"Nial","salary":"$19389.40"},
{"id":11,"name":"Elwira","salary":"$15243.79"},
{"id":12,"name":"Theresina","salary":"$11884.37"},
{"id":13,"name":"Antoinette","salary":"$26720.73"},
{"id":14,"name":"Kaitlynn","salary":"$29657.51"},
{"id":15,"name":"Kris","salary":"$15309.96"},
{"id":16,"name":"Aura","salary":"$22064.97"},
{"id":17,"name":"Ursula","salary":"$25091.89"},
{"id":18,"name":"Padriac","salary":"$28680.37"},
{"id":19,"name":"Ichabod","salary":"$11179.91"},
{"id":20,"name":"Rosco","salary":"$18902.17"}]

function displayData() {
    let row = ""
    for (emp of employee) {
        row = row + `<tr><td> ${emp.id} </td>
                 <td> ${emp.name}</td>
                 <td>${emp.salary}</td>                
    </tr>`
    }
    document.getElementById("id1").innerHTML = row
}