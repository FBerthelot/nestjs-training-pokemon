import { readFile } from 'node:fs/promises';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// To test it, run : "npm run auth -- florent formation"
export const authenticate = async (
  name: string,
  password: string,
): Promise<boolean> => {
  const file = await readFile(path.join(__dirname + '/users.csv'), 'utf-8');

  const csvTable = file.split('\n').map((row) => row.split(','));
  const users = csvTable
    .filter((_, i) => i !== 0)
    .map((userTable) => ({
      name: userTable[0],
      password: userTable[1],
    }));

  return !!users.find(
    (user) => user.name === name && user.password === password,
  );
};
