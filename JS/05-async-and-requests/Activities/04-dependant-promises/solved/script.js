console.log('Your JS file is linked!');

// Write your code below
// function that returns a promise that resolves after a given time
function wait(ms) {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(true), ms);
  });
}

function finish(val) {
  return new Promise((resolve) => {
    return setTimeout(
      () =>
        resolve(
          val
            ? console.log('Finished promises')
            : console.log('Something went wrong!')
        ),
      0
    );
  });
}

// Call wait and pass in finish as a callback
wait(1000).then(finish);
