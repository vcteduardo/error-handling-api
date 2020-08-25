const ClientValidator = require('../../validators/Clients/ClientValidator');
const Client = require('../../models/Clients/ClientModel');
const {
  HttpResponseError,
  HttpResponseSuccess,
  ErrorCodes,
} = require('../../helpers/Http/index');

class ClientController {
  async index(req, res) {
    const response = await Sample.find();

    return res.json(response);
  }

  async show(req, res) {
    const response = await Sample.findById(req.params.id);

    return res.json(response);
  }

  async store(req, res) {
    try {
      const validator = await ClientValidator(req.body, 'store');
      console.log(validator.error);
      if (validator.error) throw validator.error;

      // const response = await Sample.create(req.body);

      aa;

      return res.json(response);
    } catch (error) {
      console.log(error);

      return new HttpResponseError(res, error);
    }
  }

  async update(req, res) {
    try {
      await SampleValidator(req.body, 'update');

      const response = await Sample.findByIdAndUpdate(req.params.id, req.body);

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    await Sample.findByIdAndDelete(req.params.id);

    return res.send(true);
  }
}

module.exports = new ClientController();
