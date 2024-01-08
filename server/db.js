const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "apple",
  host: "localhost",
  port: 3000,
  database: "perntodo",
});

module.exports = pool;
