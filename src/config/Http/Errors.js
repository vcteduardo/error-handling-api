class ObjectError {
  constructor(errorMessage, responseCode, errorCode) {
    return { errorMessage, responseCode, errorCode };
  }
}

const ErrorCodes = {
  /* GENERIC ERRORS */
  GENERIC_PROCESSING_ERROR: new ObjectError(
    'Erro de solicitação de processamento',
    400,
    10
  ),

  /* CLIENT ERRORS */
  EMAIL_ALREDY_EXISTS: new ObjectError('Esse E-mail já foi utilizado', 400, 20),
};

module.exports = ErrorCodes;
