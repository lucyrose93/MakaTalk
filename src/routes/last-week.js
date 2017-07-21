module.exports = {
  method: 'GET',
  path: '/last-week',
  handler: function (request, reply) {
    reply.view('last-week')
  }
}
