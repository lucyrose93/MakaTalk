module.exports = {
  method: 'GET',
  path: '/play',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/lNGy5HLog1k?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How are you feeling when you play? You choose.'
    }
    reply.view('play', data)
  }
}
