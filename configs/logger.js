const pino = require('pino');

const fileTransport = pino.transport({
  targets: [
    {
      target: 'pino-pretty',
      options: {
        destination: './logs/app.log',
      },
    },
    {
      target: 'pino-pretty',
    },
  ],
});

module.exports = pino(fileTransport);
