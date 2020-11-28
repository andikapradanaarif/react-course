export default {
  LOGIN: '/auth/login',
  REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `users/${userId}`;
  },
};
