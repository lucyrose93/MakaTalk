module.exports = {
  method: 'GET',
  path: '/submit-survey',
  handler: function (request, reply) {
    reply.view('submit-survey')
  }
}
