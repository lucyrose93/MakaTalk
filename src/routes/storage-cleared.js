module.exports = {
  method: 'GET',
  path: '/storage-cleared',
  handler: function (request, reply) {
    reply.view('storage-cleared')
  }
}
