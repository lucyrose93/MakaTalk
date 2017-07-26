module.exports = {
  method: 'GET',
  path: '/today',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/Ih7uAUba1bg?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'How are you feeling today? You choose.'
    }
    reply.view('today', data)
  }
}
