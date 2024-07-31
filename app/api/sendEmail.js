"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function sendEmail({ name, email, message }) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
      text: message,
      subject: `${name} te mandou uma mensagem pelo seu portfólio!`,
    });

    console.log("teste!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(info);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
