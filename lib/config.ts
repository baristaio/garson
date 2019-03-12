export default  {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
  name: 'The Gateway, API service',
  description: 'The Gateway Service',
  connections: {
    type: 'amqp',
    name: 'amqp',
    descriptor: {
      host: process.env.RABBIT_HOST || '127.0.0.1',
      options: {
        login: process.env.RABBIT_USER || 'guest',
        password: process.env.RABBIT_PASSW || 'guest',
      },
    },
  },
  subQueue: process.env.SUB_QUEUE || 'sub_test_task',
  pubQueue: process.env.PUB_QUEUE || 'pub_test_task',

  logLevel: process.env.LOG_LEVEL || process.env.DEBUG_LEVEL || 'info',
};
