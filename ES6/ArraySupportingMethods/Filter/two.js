let cars = [{ "Brand": "Pontiac", "Model": "Grand Prix", "Release": 1993, "Price": "$319361.82" },
{ "Brand": "GMC", "Model": "Yukon", "Release": 2009, "Price": "$485326.56" },
{ "Brand": "Chevrolet", "Model": "Express 1500", "Release": 1998, "Price": "$100674.87" },
{ "Brand": "Buick", "Model": "LeSabre", "Release": 1987, "Price": "$59113.04" },
{ "Brand": "Jaguar", "Model": "XK", "Release": 2009, "Price": "$91571.49" },
{ "Brand": "Ford", "Model": "Mustang", "Release": 1979, "Price": "$153943.07" },
{ "Brand": "Bentley", "Model": "Arnage", "Release": 2008, "Price": "$68558.23" },
{ "Brand": "Acura", "Model": "NSX", "Release": 2003, "Price": "$85299.08" },
{ "Brand": "Chevrolet", "Model": "Camaro", "Release": 2001, "Price": "$274564.02" },
{ "Brand": "Buick", "Model": "LaCrosse", "Release": 2011, "Price": "$50564.34" },
{ "Brand": "Honda", "Model": "Element", "Release": 2004, "Price": "$432306.42" }]



let new_Cars = cars.filter((car) => {
    if (car.Release >= 2000) {
        return car
    }

})

console.log(new_Cars);