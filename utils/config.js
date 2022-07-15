import dotenv from "dotenv";

dotenv.config();

let PORT = process.env.PORT;
let SECRET = process.env.SECRET;
let DBUSER = process.env.DBUSER;
let DBPASS = process.env.DBPASS;
let DBHOST = process.env.DBHOST;
let DBPORT = process.env.DBPORT;
let DBNAME = process.env.DBNAME;
let MAILJET0 = process.env.MAILJET0;
let MAILJET1 = process.env.MAILJET1;

export {
  PORT,
  SECRET,
  DBUSER,
  DBPASS,
  DBHOST,
  DBPORT,
  DBNAME,
  MAILJET1,
  MAILJET0,
};
