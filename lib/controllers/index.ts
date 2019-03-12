import controller from './controller';
export default  {
  routes: require('./httpControllers'),
  subs: require('./amqpControllers'),
  health: controller.health,
};
