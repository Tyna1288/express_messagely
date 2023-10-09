/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql://postgres:1234567@localhost:5433/messagely_test"
  : "postgresql://postgres:1234567@localhost:5433/messagely";

const SECRET_KEY = process.env.SECRET_KEY || 'zfhdjfhkjhjkplmnbki';

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};