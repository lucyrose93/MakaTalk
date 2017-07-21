module.exports = {
  method: 'GET',
  path: '/select-survey',
  handler: function (request, reply) {
    reply.view('select-survey')
  }
}
