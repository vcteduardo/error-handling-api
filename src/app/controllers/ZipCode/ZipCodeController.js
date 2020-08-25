const AxiosService = require('../../services/AxiosService');
const {
  HttpResponseError,
  HttpResponseSuccess,
  ErrorCodes,
} = require('../../helpers/Http/index');

class ClientController {
  async zip_code(req, res) {
    try {
      const { zip_code } = req.params;

      const config = {
        'Content-Type': 'application/json',
      };

      const response = await AxiosService.index(
        'get',
        `https://viacep.com.br/ws/${zip_code}/json`,
        config,
        null,
        null
      );

      if (response.responseError) {
        throw {
          error_message: 'Informa um CEP Valido',
          error_code: 2000,
          error_data: response.responseError.response.data,
        };
      }

      return new HttpResponseSuccess(res, 200, {
        zip_code: response.data.cep,
        street: response.data.logradouro,
        complement: response.data.complemento,
        neighborhood: response.data.bairro,
        state: response.data.uf,
        city: response.data.localidade,
      });
    } catch (error) {
      console.log(error);
      return new HttpResponseError(res, error);
    }
  }
}

module.exports = new ClientController();
