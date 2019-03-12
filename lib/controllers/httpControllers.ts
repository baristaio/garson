
import express = require('express');
import controller from './controller';

const health = async(logger: any, connection: any, req: express.Request) => {
  return controller.health();
};

const doIt = async(logger: any, connection: any, req: express.Request) => {
  const data = req.query;
  return controller.doIt(logger, connection, data);
};

export default {
  health,
  doIt,
};
// const enrich = async(logger, connection, req) => {
//   logger.info('Enrich model request');
//   const eventModel = req.body.model;
//   validateBoxModel(eventModel);
//   try {
//     await controller.enrich(logger, connection, eventModel);
//     return {
//       status: 200,
//       body: eventModel
//     };
//   }
//   catch (error) {
//     logger.error(error.toLocaleString());
//     return {
//       status: 500,
//       body: 'Enrich Failed'
//     };
//   }
// };
//
// function validateBoxModel(boxesModel) {
//   console.log(boxesModel);
//   return true;
// }
//
// const doFind = async(logger, connection, eventId, image = null, userRole = null) => {
//   try {
//     const model = await controller.find(logger, connection, eventId, image, userRole);
//     return {
//       status: 200,
//       body: model
//     };
//   }
//   catch (err) {
//     logger.error(err);
//     return {
//       status: 500,
//       body: err.toLocaleString()
//     };
//   }
// };
//
// const find = async(logger, connection, req) => {
//   const startTime = Date.now();
//   const eventId = req.params.id * 1;
//   if (isNaN(eventId)) {
//     logger.error('Request wrong eventId, ', req.params.id);
//     return {
//       status: 400,
//       body: 'eventid is not a number'
//     };
//   }
//   const image = req.params.image;
//   if (image) {
//     // validate
//     if (isNaN(image)) {
//       logger.error('Request wrong imageNumber, ', req.params.image);
//       return {
//         status: 400,
//         body: 'imageNumber is not a number'
//       };
//     }
//   }
//   const token = req.headers;
//   const userRole = await controller.getUserRole(token);
//   const result = await doFind(logger, connection, eventId, image, userRole);
//   logger.debug('Find, [ms]:', Date.time - startTime);
//   return result;
// };
//
// const findEvent = async(logger/* , connection, req*/) => {
//   logger.info('request to find event boxes');
//   return { action: 'findEvent' };
// };
//
// const findByNameAndView = async(logger/* , connection, req*/) => {
//   logger.info('request to find view for the event');
//   return { action: 'findByNameAndView' };
// };
//
// const deleteByName = async(/* logger, connection, req*/) => {
//   return { action: 'deleteByName' };
// };
//
// const recalculateBoxes = async(logger, connection, req) => {
//   const payload = {
//     name: req.params.id * 1,
//     model_names: req.body // eslint-disable-line camelcase
//   };
//   return controller.recalculateBoxes(payload, {
//     logger,
//     connection,
//     queueName: process.env.PUB_QUEUE
//   });
// };
