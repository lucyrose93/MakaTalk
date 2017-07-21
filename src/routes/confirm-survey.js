module.exports = {
  method: 'GET',
  path: '/confirm-survey',
  handler: function (request, reply) {
    reply.view('confirm-survey')
  }
}
