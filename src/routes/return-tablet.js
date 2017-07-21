module.exports = {
  method: 'GET',
  path: '/return-tablet',
  handler: function (request, reply) {
    reply.view('return-tablet')
  }
}
