module.exports = {
  method: 'GET',
  path: '/come-again',
  handler: function (request, reply) {
    reply.view('come-again')
  }
}
