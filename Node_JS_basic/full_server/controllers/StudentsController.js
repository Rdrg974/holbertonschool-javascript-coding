const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');
    readDatabase('./database.csv').then((data) => {
      response.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      response.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
      response.end();
    }).catch((err) => response.write(err.message))
      .finally(() => {
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE');
      response.end();
      return;
    }
    readDatabase('./database.csv').then((data) => {
      const students = data[major];
      response.write(`List: ${students.join(', ')}`);
      response.end();
    }).catch((err) => response.send(err.message));
  }
}

export default StudentsController;
