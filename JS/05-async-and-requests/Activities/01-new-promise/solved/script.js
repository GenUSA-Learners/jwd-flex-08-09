console.log('Your JS file is linked!');

// Write your code below this line:
// A function that returns a promise based on random number
function randomPromise() {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 4);
    if (num < 2) {
      resolve(num);
    } else if (num >= 2) {
      reject(new Error(`Your number ${num} is greater than 1`));
    }
  });
}

randomPromise()
  .then((num) => {
    console.log(`Your number is ${num}`);
  })
  .catch((err) => {
    console.log(err);
  });
