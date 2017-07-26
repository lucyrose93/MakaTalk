module.exports = {
  method: 'GET',
  path: '/consent',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/bGIhghnseYk?rel=0&amp;autoplay=1&amp;controls=0&amp;showinfo=0',
      question: 'Hello. We are going to think about how you are feeling. Is that OK? Yes or no? You choose.'
    }
    reply.view('consent', data)
  }
}
