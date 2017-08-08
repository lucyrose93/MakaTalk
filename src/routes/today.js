module.exports = {
  method: 'GET',
  path: '/today',
  handler: function (request, reply) {
    let data = {
      question: 'How are you feeling today? You choose.'
    }
    reply.view('today', data)
  }
}
