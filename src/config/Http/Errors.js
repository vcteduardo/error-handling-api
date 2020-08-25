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
};

module.exports = ErrorCodes;
