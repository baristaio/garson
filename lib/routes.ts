import httpControllers  from './controllers/httpControllers';

const routes = [
  {
    headers: { 'Content-Type': 'application/json' },
    route: '/health',
    method: 'GET',
    controller: httpControllers.health,
  },
  {
    headers: { 'Content-Type': 'application/json' },
    route: '/action',
    method: 'POST',
    controller: httpControllers.doAction,
    pubQueue: process.env.PUB_QUEUE || 'pub_test_task',
  },
  // {
  //   headers: { 'Content-Type': 'application/json' },
  //   route: '/action',
  //   method: 'POST',
  //   controller: controllers.doAction,
  // },
  // {
  //   headers: { 'Content-Type': 'application/json' },
  //   route: '/execute',
  //   method: 'POST',
  //   controller: controllers.execute,
  // },
];

export default {
  routes,
};
