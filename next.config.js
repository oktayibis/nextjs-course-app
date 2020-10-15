const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
// load .env file
dotenvLoad();
// connect .env to next
const withEnv = nextEnv();
// conenct with webpack.. So you can reach all data in .env which needs to to be sacret
// .env file does not upload to github
module.exports = withEnv();
