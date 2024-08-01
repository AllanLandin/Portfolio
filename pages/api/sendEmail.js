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

export default async function sendEmail(req, res) {
  try {
    const { name, email, message } = JSON.parse(req.body);

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
      text: message,
      subject: `${name} te mandou uma mensagem pelo seu portfólio!`,
    });
    return res
      .status(200)
      .json({ status: "success", message: "Email enviado!" });
  } catch (error) {
    console.error(error);
    return res.status(503).json({
      status: "error",
      message: "Algo não deu certo... Tente novamente mais tarde",
    });
  }
}
