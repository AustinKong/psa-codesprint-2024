const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const authRouter = require('express').Router();
const logger = require('../utils/logger');
const config = require('../utils/config');
const User = require('../models/user');

const generateToken = (user) => {
  return jwt.sign(user, config.SECRET);
}

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

authRouter.post('/login', async (request, response) => {
  const { email, password } = request.body;
  let user;

  try {
    const results = await User.findAll({
      where: {
        email: email
      }
    });
    user = results[0].dataValues;
  } catch (error) {
    response.status(500).send({ error: 'Database error' });
  }

  if (!user || user.passwordHash !== hashPassword(password)) {
    response.status(401).send({ error: 'Invalid email or password' });
    return;
  }

  const token = generateToken({ id: user.id, username: user.username });
  response.status(200).send({ token, username: user.username });
  logger.info(`Login success with email ${email}`);
});

authRouter.post('/signup', async (request, response) => {
  const { username, email, password } = request.body;
  const passwordHash = hashPassword(password);
  let user;

  try {
    const result = await User.create({
      username: username,
      email: email,
      passwordHash: passwordHash
    });
    user = { id: result.dataValues.id, username, email };
  } catch (error) {
    response.status(400).send({ error: 'Invalid email or password' });
    logger.error(`Signup failed with email ${email}. Error: ${error}`);
  }

  const token = generateToken(user);
  response.status(201).send({ token, username });
  logger.info(`Signup success with email ${email}. Generated id: ${user.id}`);
});

module.exports = authRouter;