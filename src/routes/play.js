module.exports = {
  method: 'GET',
  path: '/play',
  handler: function (request, reply) {
    reply.view('play')
  }
}
