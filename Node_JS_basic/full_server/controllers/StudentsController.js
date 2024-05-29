import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      // process and send data here
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      // process and send data here
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
