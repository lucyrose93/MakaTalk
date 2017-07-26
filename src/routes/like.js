module.exports = {
  method: 'GET',
  path: '/like',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/Z-dSUBbkQHo?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'Did you like what you did today? You choose.'
    }
    reply.view('like', data)
  }
}
