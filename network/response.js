exports.success = function (req, res, message = 'OK', status = 200) {
  res.status(status).send({
    error: false,
    status,
    body: message,
  })
}

exports.error = function (req, res, message = 'Internal Server Error', status='500') {
  res.status(status).send({
    error: true,
    status,
    body: message,
  })
}