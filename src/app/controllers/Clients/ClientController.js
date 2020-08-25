const ClientValidator = require('../../validators/Clients/ClientValidator');
const Client = require('../../models/Clients/ClientModel');
const {
  HttpResponseError,
  HttpResponseSuccess,
  ErrorCodes,
} = require('../../helpers/Http/index');

class ClientController {
  async store(req, res) {
    try {
      const validator = await ClientValidator(req.body, 'store');
      if (validator.error) throw validator.error;

      const { email } = req.body;

      if (await Client.findOne({ email })) throw ErrorCodes.EMAIL_ALREDY_EXISTS;

      const client = await Client.create(req.body);

      return new HttpResponseSuccess(res, 201, {
        client,
      });
    } catch (error) {
      console.log(error);

      return new HttpResponseError(res, error);
    }
  }
}

module.exports = new ClientController();
