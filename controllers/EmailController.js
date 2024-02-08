const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const { MAIL } = require('../configs/helpers');
const Logger = require('../configs/logger');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: MAIL.MAIL_HOST,
  port: MAIL.MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL.MAIL_FROM_ADDRESS,
    pass: MAIL.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    Logger.error({
      request: req.body,
      errors: errors.array(),
    });
    return res.status(400).json({
      status: 400,
      errors: errors.array(),
    });
  }

  try {
    const info = await transporter.sendMail({
      from: MAIL.MAIL_FROM_ADDRESS,
      to: req.body.email,
      subject: MAIL.MAIL_SUBJECT,
      text: req.body.body,
      html: req.body.body,
    });
    Logger.info('Message Sent: %s', info.messageId);
    return res.status(200).json({
      status: 200,
      message: info.messageId,
    });
  } catch (error) {
    Logger.error(error);
  }
};
