/* eslint-disable consistent-return */
const ApiError = require('../error/ApiError');

//* class используется для группировки
class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const { id } = req;
    if (!id) {
      return next(ApiError.badRequest('No matching user id'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
