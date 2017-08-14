module.exports = {
  method: 'GET',
  path: '/school',
  handler: function (request, reply) {
    let data = {
      question: 'How do you feel at school? You choose.'
    }
    reply.view('school', data)
  }
}
