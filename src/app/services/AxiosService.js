const Axios = require('axios');

class AxiosService {
  async index(
    method,
    url,
    headers = null,
    params = null,
    data = null,
    responseType = null
  ) {
    try {
      return await Axios({
        method,
        url,
        headers,
        params,
        data,
        responseType,
      });
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      let responseError = error;
      if (error.response && error.response.data && error.response.data.erros)
        responseError = error.response.data.erros;

      return { responseError };
    }
  }
}

module.exports = new AxiosService();
