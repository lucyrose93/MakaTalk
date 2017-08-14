module.exports = {
  method: 'GET',
  path: '/come-again',
  handler: function (request, reply) {
    let data = {
      question: 'Would you like to come here again? You choose.'
    }
    reply.view('come-again', data)
  }
}
