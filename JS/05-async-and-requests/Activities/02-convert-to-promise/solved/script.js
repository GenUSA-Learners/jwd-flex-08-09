console.log('Your JS file is linked!');

// Refactor the following function to use a Promise instead
const studentAsleep = false;
const studentLearning = true;

// Refactor watchInstructorDemo to use a Promise instead
function watchInstructorDemo() {
  return new Promise((resolve, reject) => {
    if (studentAsleep) {
      reject({
        event: 'Student is sleeping.',
        message: 'Instructor needs to be more fun.',
      });
    } else if (!studentLearning) {
      reject({
        event: 'Student is not learning.',
        message: 'Instructor needs to be more fun.',
      });
    } else {
      resolve('We are all totally getting this!');
    }
  });
}

watchInstructorDemo()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.event + ' ' + error.message);
  });
