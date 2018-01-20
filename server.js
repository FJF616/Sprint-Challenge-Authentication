const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mySecret = require('./config');
const routes = require('./api/routes/routes');
// const session = require('express-session');
const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

server.use(bodyParser.json());
// server.use(session({
//   secret: mySecret,
//   resave: true,
//   saveUninitialized: false
// }));
server.use(cors());


routes(server);

module.exports = {
  server
};
