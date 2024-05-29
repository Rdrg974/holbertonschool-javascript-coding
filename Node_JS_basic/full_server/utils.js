import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export const readDatabase = async (filePath) => {
  try {
    const data = await readFile(filePath, 'utf8');
    // process data here
  } catch (error) {
    throw error;
  }
};
