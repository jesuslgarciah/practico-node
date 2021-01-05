const express = require('express');

const config = require('../config/config');
const user = require('./components/user/router');
const app = express();

app.use('/api/users', user);


app.listen(config.api.port, () => {
  console.log(`Server running on http://localhost:${config.api.port}`);
})