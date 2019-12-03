var nodemailer = require('nodemailer');

// To send mail using the nodemailer module.
exports.mailSender = async function (mailData) {
    let testAccount = await nodemailer.createTestAccount();
    // Creating transport using the credentials
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      // Provide the credentials
      auth: {
        user: 'rohansaxena2013@gmail.com',
        pass: 'summergeeks'
      }
    });
    // Setting up the content of the email body.
    let info = await transporter.sendMail({
      from: '"Office Entry Management" <entrymanagement@gmail.com>',
      to: mailData[0],
      subject: mailData[1],
      html: mailData[2]
    });
    console.log("Message sent: %s", info.messageId);
  }
