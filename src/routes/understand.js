module.exports = {
  method: 'GET',
  path: '/understand',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/RenIsHB-XGc?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'When you came here, did the person understand you? You choose.'
    }
    reply.view('understand', data)
  }
}
