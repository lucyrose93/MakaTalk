module.exports = {
  method: 'GET',
  path: '/submit-survey',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/kmvOj0xAp7E?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'Please give back the tablet. Thank you.'
    }
    reply.view('submit-survey', data)
  }
}
