
const controller = require('./controller');

// === IMPLEMENTATION ===
async function doAction(message: any, serviceObj:any) {
  serviceObj.logger.info(`Proceed ${message}`);
  return new Promise<any>((resolve, reject) => {
    try {
      const { doAction, payload } = controller.validate(serviceObj.logger, message);
      resolve(doAction(serviceObj.connection, payload, serviceObj.logger));
    }  catch (err) {
      serviceObj.logger.error(err);
      resolve(err);
    }
  });
}

module.exports = {
  doAction,
};
