console.log('Your JS file is linked!');

// Write your code below
// function that returns a promise that resolves after a given time
function wait(ms) {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(true), ms);
  });
}

function finish(res) {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () =>
        res ? resolve('Finished promises') : reject('Something went wrong!'),
      0
    );
  });
}

// Call wait and pass in finish as a callback
wait(2000)
  .then(finish)
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
