const { Pool } = require("pg");
require("dotenv").config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// module.exports = new Pool({
//   host: "dpg-crbucdl6l47c73d9do3g-a", // or wherever the db is hosted
//   user: process.env.USER,
//   database: "inventory_fxcu",
//   password: process.env.PASSWORD,
//   port: 5432, // The default port
// });
// const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: `postgresql://postgres:${process.env.USER}@autorack.proxy.rlwy.net:27605/railway`,
});
