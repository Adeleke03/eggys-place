// import {createTransport} from "nodemailer";
// import { resetPasswordEmailTemplate } from "./emailTemplate.js";

// export const sendForgotPasswordMail = (options)=>{

//     const transporter = createTransport({
//         host:process.env.EMAIL_SERVICE,
//         port:process.env.EMAIL_PORT,
//         secure:false,
//         auth:{
//             user:process.env.EMAIL_USERNAME,
//             pass:process.env.EMAIL_PASSWORD,
//         },
//     });
//     const mailOptions = {
//         from:process.env.EMAIL_FROM,
//         to:options.to,
//         subject:"Reset Password",
//         html: resetPasswordEmailTemplate(options.firstName, options.resetUrl),
//         category: "Reset Password",

//     };

//     transporter.sendMail(mailOptions,function(error,info){
//         if(error){
//             console.log(error);
//         }else{
//             console.log("Email sent: " + info.response);
//         }
//     })

// }



import { createTransport } from "nodemailer";
import { resetPasswordEmailTemplate } from "./emailTemplate.js";

export const sendForgotPasswordMail = (options) => {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: options.to,
      subject: "Reset Password",
      html:  resetPasswordEmailTemplate(options.firstName, options.resetUrl),
      category: "Reset Password",
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };
