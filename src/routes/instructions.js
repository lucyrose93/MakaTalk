module.exports = {
  method: 'GET',
  path: '/instructions',
  handler: function (request, reply) {
    reply.view('instructions')
  }
}
