module.exports = {
  method: 'GET',
  path: '/last-week',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/FmOPgOghIfk?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How were you feeling last week? You choose.'
    }
    reply.view('last-week', data)
  }
}
