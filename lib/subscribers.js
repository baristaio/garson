const actions = require('./controllers/amqpControllers');

const subscribers = [
  {
    prefetch: 1,
    queue: process.env.SUB_QUEUE || 'sub_test_task',
    pubQueue: {
      queue: process.env.PUB_QUEUE || 'pub_test_task',
      durable: true
    },
    durable: true,
    noAck: false,
    controller: async(message, {logger, connections}) => actions.doAction(message, {logger, connections})
  }
];

module.exports = {
  api: subscribers
};

