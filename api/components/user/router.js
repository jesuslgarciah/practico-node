const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    const users = await Controller.list();
    response.success(req, res, users, 200);
  } catch (error) {
    response.error(req, res, error, 400);
  }
})

router.get('/:id', async function (req, res, next){
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 400);
  }
})

module.exports = router;