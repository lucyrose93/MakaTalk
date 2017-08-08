module.exports = {
  method: 'GET',
  path: '/instructions',
  handler: function (request, reply) {
    let data = {
      question: 'Look at me signing and choose how you are feeling. To hear this again, press here.'
    }
    reply.view('instructions', data)
  }
}
