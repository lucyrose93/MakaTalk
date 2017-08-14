module.exports = {
  method: 'GET',
  path: '/thank-you',
  handler: function (request, reply) {
    let data = {
      question: 'Thank you! You have finished now. Well done.'
    }
    reply.view('thank-you', data)
  }
}
