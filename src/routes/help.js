module.exports = {
  method: 'GET',
  path: '/help',
  handler: function (request, reply) {
    reply.view('help')
  }
}
