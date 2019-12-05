require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "exampledb",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
