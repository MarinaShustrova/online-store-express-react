/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-const-assign */
/* eslint-disable class-methods-use-this */
//* class используется для группировки
const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const {
        name, price, brandId, info,
      } = req.body;
      const { img } = req.files;
      const fileName = `${uuid.v4()}.jpg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      if (info) {
        info = JSON.parce(info);
        info.forEach((i) => DeviceInfo.create({
          title: i.title,
          description: i.description,
          deviceId: device.id,
        }));
      }

      const device = await Device.create({
        name, price, brandId, info, img: fileName,
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const {
      brandId, typeId, limit, page,
    } = req.query;
    // let page = page || 1;
    // limit = limit || 10;
    const offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne(
      {
        where: { id },
        include: [{ model: DeviceInfo, as: 'info' }],
      },
    );
    return res.json(device);
  }
}

module.exports = new DeviceController();
