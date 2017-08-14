module.exports = {
  method: 'GET',
  path: '/understand',
  handler: function (request, reply) {
    let data = {
      question: 'When you came here, did the person understand you? You choose.'
    }
    reply.view('understand', data)
  }
}
