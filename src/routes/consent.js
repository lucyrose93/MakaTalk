module.exports = {
  method: 'GET',
  path: '/consent',
  handler: function (request, reply) {
    reply.view('consent')
  }
}
