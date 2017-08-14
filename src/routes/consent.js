module.exports = {
  method: 'GET',
  path: '/consent',
  handler: function (request, reply) {
    let data = {
      playlistID: 'PLpPmZmHyOS_PQgT6nTB3WkUBl8zX47D3p',
      question: 'Hello. We are going to think about how you are feeling. Is that OK? Yes or no? You choose.'
    }
    reply.view('consent', data)
  }
}
