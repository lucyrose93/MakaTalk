module.exports = {
  method: 'GET',
  path: '/next-week',
  handler: function (request, reply) {
    reply.view('next-week')
  }
}
