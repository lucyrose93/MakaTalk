module.exports = {
  method: 'GET',
  path: '/friends',
  handler: function (request, reply) {
    let data = {
      question: 'How do you feel with your friends? You choose.'
    }
    reply.view('friends', data)
  }
}
