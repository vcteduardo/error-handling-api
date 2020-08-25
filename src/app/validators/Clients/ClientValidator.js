/**
 * Thats validation must only works for controller with the same name
 * To more validation schema, take a look https://github.com/jquense/yup
 */

const Yup = require('../Yup');

class ClientValidator {
  validation(body, role) {
    let validationConfig;

    switch (role) {
      case 'store':
        validationConfig = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required(),
          address: Yup.object({
            zip_code: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.string().required(),
            complement: Yup.string(),
            neighborhood: Yup.string().required(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            country: Yup.string()
              .matches(/^([A-Za-z]){2}$/, 'País deve ter sigla de 2 caracteres')
              .required(),
          }),
        });
        break;

      case 'update':
        validationConfig = Yup.object().shape({
          title: Yup.string(),
          description: Yup.string(),
        });
        break;
    }

    return validationConfig.validate(body).catch(err => {
      return {
        error: {
          error_message: `${err.path} ${err.message}`,
          error_data: err,
        },
      };
    });
  }
}

module.exports = new ClientValidator().validation;
