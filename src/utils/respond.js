/**
 *
 * @param {Object} res Express response object
 * @param {Number} status Preferred Http status code
 * @param {String} message a short message
 * @param {Object} data the response payload
 * @returns null
 */
const respond = (res, status, message, data = null) => {
  const successCodes = [200, 201]

  return res.status(status).send({
    status: successCodes.includes(status) ? "success" : "error",
    data,
    message,
  })
}

module.exports = respond
