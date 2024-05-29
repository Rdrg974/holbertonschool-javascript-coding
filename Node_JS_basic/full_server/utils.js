const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const studentsByField = {};
      const lines = data.split('\n').slice(1); // Skip header line
      for (const line of lines) {
        const [firstName, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
      resolve(studentsByField);
    });
  });
}
module.exports = readDatabase;
