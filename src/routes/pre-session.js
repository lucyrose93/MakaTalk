module.exports = {
  method: 'GET',
  path: '/pre-session/{file*}',
  handler: {
    directory: {
      path: 'public/html/pre-session',
    },
  },
};
