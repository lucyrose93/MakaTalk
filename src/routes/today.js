module.exports = {
  method: 'GET',
  path: '/today',
  handler: function (request, reply) {
    reply.view('today')
  }
}
