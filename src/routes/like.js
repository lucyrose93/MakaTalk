module.exports = {
  method: 'GET',
  path: '/like',
  handler: function (request, reply) {
    reply.view('like')
  }
}
