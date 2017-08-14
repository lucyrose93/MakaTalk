module.exports = {
  method: 'GET',
  path: '/family',
  handler: function (request, reply) {
    let data = {
      question: 'How do you feel at home? You choose.'
    }
    reply.view('family', data)
  }
}
