/* eslint-disable no-console */
export default (req, res, next) => {
  console.time('Request');
  console.log(`METHOD: ${req.method} \nURL: ${req.url}`);
  next();
  console.timeEnd('Request');
};
