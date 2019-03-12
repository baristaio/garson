/// <reference path="modules.d.ts" />
import espresso= require('@baristaio/espresso');

import config from './config';
import routes from './routes';

const descriptor = Object.assign({}, config, {
  routes: routes.routes,
});

let service: any;
function getInstance() {
  if (!service) {
    service = espresso.getService(descriptor, config.logLevel);
  }
  return service;
}

export default  {
  getInstance,
};
