#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf-8', (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(content);
  }
<<<<<<< HEAD
}
=======
});
>>>>>>> 5efbfb37bf3c5ab02e46bea1b4c2702c149059d5
