module.exports = {
  method: 'GET',
  path: '/instructions',
  handler: function (request, reply) {
    let data = {
      url: 'https://www.youtube.com/embed/Ku3LrbO6NHw?rel=0&amp;controls=0&amp;showinfo=0',
      question: 'Look at me signing and choose how you are feeling. To hear this again, press here.'
    }
    reply.view('instructions', data)
  }
}
