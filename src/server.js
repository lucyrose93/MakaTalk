const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');

const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
});

server.register([inert, vision], (err) => {
  if (err) throw err;
  server.route(routes);
});

module.exports = server;
