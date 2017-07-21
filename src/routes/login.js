module.exports = {
  method: 'GET',
  path: '/login',
  handler: function (request, reply) {
    reply.view('login')
  }
}
