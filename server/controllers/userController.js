/* eslint-disable consistent-return */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const { User, Basket } = require('../models/models');
//* class используется для группировки

const generateJwt = (id, email, role) => jwt.sign(
  { id, email, role },
  process.env.SECRET_KEY,
  { expiresIn: '24h' },
);
class UserController {
  // async registration(req, res) {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password!'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('User with such email alredy exist!'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
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
