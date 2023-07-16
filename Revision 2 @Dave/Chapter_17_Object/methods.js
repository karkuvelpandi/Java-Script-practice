//Object methods 

// Example

const band={
    vocals:"Robert",
    guitar:"jimmy",
    bass:"john",
    drums:"johnny"
}

console.log(Object.keys(band));  // [ 'vocals', 'guitar', 'bass', 'drums' ]
console.log(Object.values(band));  // [ 'Robert', 'jimmy', 'john', 'johnny' ]

// for-in

for(let job in band){
    console.log(band[job]);  // Robert, jimmy, john, johnny
}   

for(let job in band){
    console.log(`On ${job}, Its ${band[job]}...!`);
}
// On vocals, Its Robert...!
// On guitar, Its jimmy...!
// On bass, Its john...!
// On drums, Its johnny...!

delete band.drums
// If we use delete band.drums . It will delete the key value pair from the band object.
// To check whether the property is there or not 
console.log(band.hasOwnProperty("drums"));  //false