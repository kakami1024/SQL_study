const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.DATABASE_USERNAME);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_NAME);
