const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1508",
  database: "catalogo_pokemons",
});

module.exports = pool;
