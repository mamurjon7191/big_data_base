const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: "3000",
  database: "simpleDatabase",
});

module.exports = pool;
