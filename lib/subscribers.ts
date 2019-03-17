const actions = require('./controllers/amqpControllers');

const subscribers = [
  {
    prefetch: 1,
    queue: process.env.SUB_QUEUE || 'sub_test_task',
    pubQueue: {
      queue: process.env.PUB_QUEUE || 'pub_test_task',
      durable: true,
    },
    durable: true,
    noAck: false,
    controller: async(message:any, logger:any, connections:any) => actions.doAction(message, logger, connections) ,
  },
];

export default  {
  subscribers,
};
