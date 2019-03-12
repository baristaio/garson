
export const doIt = (logger: any, connections: any, payload:any) => {
  logger.info('Do It');
  logger.debug('doIt:', payload);
};

const checkHealth = () => ({ health: 'OK' });
export const health = (/* logger, connections*/) => {
  return new Promise(resolve =>
        resolve({
          status: 200,
          body: checkHealth(),
        }),
    );
};
