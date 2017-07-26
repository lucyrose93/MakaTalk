module.exports = {
  method: 'GET',
  path: '/results',
  handler: function (request, reply) {
    reply.view('results')
  }
}
