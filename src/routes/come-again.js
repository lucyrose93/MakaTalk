module.exports = {
  method: 'GET',
  path: '/come-again',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/_6cWMR2QDRM?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'Would you like to come here again? You choose.'
    }
    reply.view('come-again', data)
  }
}
