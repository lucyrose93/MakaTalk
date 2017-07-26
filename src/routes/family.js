module.exports = {
  method: 'GET',
  path: '/family',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/EmSNzpK1Obc?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How do you feel at home? You choose.'
    }
    reply.view('family', data)
  }
}
