const express = require('express');
const app = express();

// CALL TO DB CONNECTION FOLDER
const sequelize = require('./startup/db');
// const model = require('./models/articles');

// CALL TO ROUTES FOLDER
require('./startup/routes')(app);

// CREATE TABLES IF THEY DON'T EXIST
// const startServer = async () => {
//   const result = await sequelize.sync();
// };
//
// (async function() {
//   await startServer();
// })();
//
// const port = process.env.PORT || 3030;
// const server = app.listen( port, console.log(`listening to port ${port}`));

sequelize.sync().then(result => {
  const port = process.env.PORT || 80;
  server = app.listen( port, console.log(`listening to port ${port}`));
}).catch( err => {
  console.error('Error occurred: ',err.name);
});

// module.exports = server;
