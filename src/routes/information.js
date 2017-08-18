module.exports = {
  method: 'GET',
  path: '/information',
  handler: function (request, reply) {
    reply.view('information')
  }
}
