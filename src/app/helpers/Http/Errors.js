class HttpResponseError {
  constructor(res, err, status = 422) {
    const { responseCode, errorCode, errorMessage, errorData } = this.getError(
      err,
      status
    );
    this.sendResponse(res, responseCode, errorCode, errorMessage, errorData);
  }

  getError(err, status) {
    let errorCode = 0;
    let errorData = {};
    let errorMessage = `Não foi possível processar seu pedido`;
    let responseCode = 400;

    if (typeof err === 'object' && err.errorCode) {
      errorMessage = err.errorMessage;
      responseCode = err.responseCode;
      errorCode = err.errorCode;
      errorData = err.errorData || null;
    } else {
      errorMessage = err.error_message || String(err);
      errorData = err.error_data || err.errors || null;
      errorCode = err.error_code || 0;
      responseCode = status;
    }

    return { responseCode, errorCode, errorMessage, errorData };
  }

  sendResponse(res, responseCode, errorCode, errorMessage, errorData) {
    return res.status(responseCode).json({
      success: false,
      code: errorCode,
      error_message: errorMessage,
      error_data: errorData,
    });
  }
}

module.exports = HttpResponseError;
