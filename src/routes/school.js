module.exports = {
  method: 'GET',
  path: '/school',
  handler: function (request, reply) {
    reply.view('school')
  }
}
