// code challenge

// write a random letter from you name

const name = "Karkuvel pandi P";

function randomize() {
  let nameWithoutSpace = name.replaceAll(" ", "");
  //   console.log(nameWithoutSpace.length);

  //   IMPORTANTLY here in this piece of randomization last number defined 14 which is real length will not come due to floor method and 0 will come according to the requirement.
  let randomNumber = Math.floor(Math.random() * nameWithoutSpace.length);
  console.log(randomNumber);
  console.log(nameWithoutSpace[randomNumber]);
}
randomize();

const anyName = name.replaceAll(" ", "");

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
