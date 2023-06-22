const  nodemailer = require("nodemailer");

const mailOptions = {
    from: '"Shakti Rajbhandari" <shaktirajbhandari@gmail.com>', // sender address
    to: "rajbhandarishakti3287@gmail.com, srajbhandari3287@gmail.com, shresthasmile31@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'shaktirajbhandari@gmail.com',
    pass: 'ntjqyronzbiicsbd',
  }
});

const mailer= (mailOptions, transporter) => {

// const mailer = async 
//     const info = await transporter.sendMail(mailOptions);
//     console.log({info: info.response})
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log(info);
        }
    });
};
mailer(mailOptions, transporter);