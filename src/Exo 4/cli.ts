import { argv } from 'node:process';
import { authenticate } from './auth';

authenticate(argv[2], argv[3])
  .then((authenticate) => {
    console.log(authenticate);
  })
  .catch((error) => {
    console.error(error);
  });
