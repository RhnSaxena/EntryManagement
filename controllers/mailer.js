
var nodemailer = require('nodemailer');

exports.mailSender = async function (mailData) {
  //console.log(mailData);
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'email-address',
        pass: 'password'
      }
    });

    let info = await transporter.sendMail({
      from: '"Office Entry Management" <entrymanagement@gmail.com>',
      to: mailData[0],
      subject: mailData[1],
      html: mailData[2]
    });
  
    console.log("Message sent: %s", info.messageId);
  }
