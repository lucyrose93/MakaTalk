module.exports = {
  method: 'GET',
  path: '/family',
  handler: function (request, reply) {
    reply.view('family')
  }
}
