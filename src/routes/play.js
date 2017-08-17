module.exports = {
  method: 'GET',
  path: '/play',
  handler: function (request, reply) {
    let data = {
      question: 'How are you feeling when you play? You choose.'
    }
    reply.view('play', data)
  }
}
