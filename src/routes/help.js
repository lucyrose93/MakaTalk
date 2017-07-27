module.exports = {
  method: 'GET',
  path: '/help',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/IUJ7LrXMIf8?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'Did it help you to come here today? You choose.'
    }
    reply.view('help', data)
  }
}
