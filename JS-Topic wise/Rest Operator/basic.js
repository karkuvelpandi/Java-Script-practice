function add(a, ...b) {
  console.log(a);
  console.log(b);
}
add(10, 20); // output 10 , [20]
add(10, 20, 30); // output 10 , [20,30]
add(10, 20, 30, 40); // output 10 , [20,30,40]
add(10, 20, 30, 40, 50); // output 10 , [20,30,40,50]
