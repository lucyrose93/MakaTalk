module.exports = {
  method: 'GET',
  path: '/submit-survey',
  handler: function (request, reply) {
    let data = {
      question: 'Please give back the tablet. Thank you.'
    }
    reply.view('submit-survey', data)
  }
}
