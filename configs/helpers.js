const dotenv = require('dotenv');

dotenv.config();

exports.PORT = process.env.PORT;

exports.MAIL = {
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_SUBJECT: process.env.MAIL_SUBJECT,
};
