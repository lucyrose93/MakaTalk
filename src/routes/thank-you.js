module.exports = {
  method: 'GET',
  path: '/thank-you',
  handler: function (request, reply) {
    reply.view('thank-you')
  }
}
