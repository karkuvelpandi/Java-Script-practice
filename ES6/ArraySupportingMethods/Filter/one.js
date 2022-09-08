let cars = requires("./data")

/* function display_Data() {
    let row = ""
    for (c of cars) {

        row = row + `<tr>
                       <td>${c.Brand}</td>
                       <td>${c.Model}</td>
                       <td>${c.Price}</td>
                       <td>${c.Release}</td>
                       </tr>`
    }
    document.getElementById("tbody_Data").innerHTML = row
} */


//Filter by year
let new_Cars = cars.filter((car) => {
    if (car.Release >= 2000) {
        return car
    }

})

//Function using For each 

function display_Data() {
    let row = ""
    new_Cars.forEach((ca) => {
        row = row + `<tr>
                       <td>${ca.Brand}</td>
                       <td>${ca.Model.toUpperCase()}</td>
                       <td>${ca.Price}</td>
                       <td>${ca.Release}</td>
                       </tr>`
    })
    document.getElementById("tbody_Data").innerHTML = row
}