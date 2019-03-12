const controllers = require('./controllers/controller');

const routes = [
  {
    headers: { 'Content-Type': 'application/json' },
    route: '/health',
    method: 'GET',
    controller: controllers.health,
  },
  {
    headers: { 'Content-Type': 'application/json' },
    route: '/action',
    method: 'POST',
    controller: controllers.doAction,
  },
  {
    headers: { 'Content-Type': 'application/json' },
    route: '/execute',
    method: 'POST',
    controller: controllers.execute,
  },
];

export default {
  routes,
};
