module.exports = {
  method: 'GET',
  path: '/like',
  handler: function (request, reply) {
    let data = {
      question: 'Did you like what you did today? You choose.'
    }
    reply.view('like', data)
  }
}
