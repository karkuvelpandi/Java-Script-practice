// try{} catch(){} can also include finally block. finally block come at the end,
// they will execute no matter what. It will still execute after the catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const makeNewError = () => {
  try {
    throw new CustomError("This is a custom error...!");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Testing the finally block after the catch.");
  }
};
makeNewError();

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) throw new Error("Odd Number");
      console.log("Even Number");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally block increment");
      i++;
    }
  }
};
makeError();
/*
Conclusion:
finally block: finally will execute no matter what, whether there is an error or not.
catch block: catch will only execute if there is an error.
try: If there is a error(new Error) in try block if we are using throw then any code
     following after that error will not be executed.
*/
