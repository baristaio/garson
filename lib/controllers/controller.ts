const actionsMap: any = {
  videoHandler: async (connection:any, payload: any, logger: any) => videoHandler(logger, connection, payload),
};

export const videoHandler = (logger: any, connections: any, payload:any) => {
  logger.info('video handler');
  logger.debug('videoHandler:', payload);
/*
  SQL-query
    */
  return {
    doPublish: true,
    message: payload,
  };
};

const checkHealth = () => ({ health: 'OK' });
const health = (/* logger, connections*/) => {
  return new Promise(resolve =>
        resolve({
          status: 200,
          body: checkHealth(),
        }),
    );
};

export const validate = (logger: any, message: any): any => {
  try {
    let params = JSON.parse(message);
    if (typeof(params) === 'string') {
      params = JSON.parse(params);
    }

    if (typeof params.payload === 'undefined') {
      throw new Error('Payload was not defined.');
    }
    if (typeof params.action === 'undefined') {
      throw new Error('Action was not defined.');
    }
    if (actionsMap[params.action] === undefined) {
      throw new Error('Action is not supported.');
    }
    console.log(`AMQP do action ${params.action}`);
    console.log(`AMQP payload ${params.payload}`);
        // if (typeof params.payload.instances === 'undefined' || params.payload.instances.length === 0) {
        //   throw new Error('Instances should be defined.');
        // }
        // return params;
    return {
      doAction: actionsMap[params.action],
      payload: params.payload,
    };
  }  catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error('Message validation failed. ' +
            'Expected message format: {"action":"action_name", "payload":payload_object}');
  }
};
export default {
  videoHandler,
  validate,
  health,
};
