require("dotenv").config();

var knex = require("knex")({
  client: "pg",
  connection: process.env.databaseURL,
});

module.exports = knex;
