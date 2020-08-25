class HttpResponseSuccess {
  constructor(res, responseCode = 200, response = {}) {
    this.sendResponse(res, responseCode, response);
  }

  sendResponse(res, responseCode, response) {
    return res.status(responseCode).json({ success: true, ...response });
  }
}

module.exports = HttpResponseSuccess;
