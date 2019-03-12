
const controller = require('./controller');

const actionsMap: any = {
  doIt: async (connection:any, payload: any, logger: any) => controller.doIt(logger, connection, payload),
};

// === IMPLEMENTATION ===
async function doAction(message: any, serviceObj:any) {
  serviceObj.logger.info(`Proceed ${message}`);
  return new Promise<any>((resolve, reject) => {
    try {
      const { action, payload } = validate(serviceObj.logger, message);
      console.log(`AMQP do action ${action}`);
      const doAction = actionsMap[action];
      if (!doAction) {
        reject(new Error(`The '${action}' does not exists.`));
      }
    }  catch (err) {
      serviceObj.logger.error(err);
      resolve(err);
    }
  });
}

function validate(logger: any, message: any) {
  try {
    let params = JSON.parse(message);
    if (typeof(params) === 'string') {
      params = JSON.parse(params);
    }

    if (typeof params.payload === 'undefined') {
      throw new Error('Payload was not defined.');
    }
    if (typeof params.payload.instances === 'undefined' || params.payload.instances.length === 0) {
      throw new Error('Instances should be defined.');
    }

    if (typeof params.action !== 'undefined') {
      return Object.assign({}, params, { payload: params.payload });
    }
    return new Error('Action type was not defined.');
  }  catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error('Invalid message format. It must be a JSON string.');
  }
}

module.exports = {
  doAction,
};
