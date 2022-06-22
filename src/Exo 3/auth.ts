const users = [
  {
    name: 'florent',
    password: 'training',
  },
];

export const authenticate = (name: string, password: string): boolean => {
  return !!users.find(
    (user) => user.name === name && user.password === password,
  );
};
