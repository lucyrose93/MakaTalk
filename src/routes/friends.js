module.exports = {
  method: 'GET',
  path: '/friends',
  handler: function (request, reply) {
    reply.view('friends')
  }
}
