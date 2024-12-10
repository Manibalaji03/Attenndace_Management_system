const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const msg = {
  to: 'manibalaji22003@gmail.com',
  from: 'manibalaji22003@gmail.com',
  subject: 'Hello, Email!',
  text: 'This is a test email.',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent!');
  })
  .then(data=>data.json()).then(data=>console.log(data.response));
