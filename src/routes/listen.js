module.exports = {
  method: 'GET',
  path: '/listen',
  handler: function (request, reply) {
    reply.view('listen')
  }
}
