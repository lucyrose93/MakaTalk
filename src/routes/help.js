module.exports = {
  method: 'GET',
  path: '/help',
  handler: function (request, reply) {
    let data = {
      question: 'Did it help you to come here today? You choose.'
    }
    reply.view('help', data)
  }
}
