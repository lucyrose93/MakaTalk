module.exports = {
  method: 'GET',
  path: '/next-week',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/_2t-Qbq5CNE?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How will you be feeling next week? You choose.'
    }
    reply.view('next-week', data)
  }
}
