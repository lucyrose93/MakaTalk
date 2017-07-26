module.exports = {
  method: 'GET',
  path: '/thank-you',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/DLle35EQWSY?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'Thank you! You have finished now. Well done.'
    }
    reply.view('thank-you', data)
  }
}
