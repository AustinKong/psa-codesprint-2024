const testRouter = require('express').Router();

testRouter.get('/', (req, res) => {
  res.send('Hello World');
  console.log('test success');
});

module.exports = testRouter;