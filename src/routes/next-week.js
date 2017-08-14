module.exports = {
  method: 'GET',
  path: '/next-week',
  handler: function (request, reply) {
    let data = {
      question: 'How will you be feeling next week? You choose.'
    }
    reply.view('next-week', data)
  }
}
