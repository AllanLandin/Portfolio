"use server";

import { SMTPClient } from "emailjs";

const emailClient = new SMTPClient({
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  authentication: ["PLAIN", "LOGIN"],
  ssl: false,
});

export default async function sendEmail({ name, email, message }) {
  try {
    const result = await emailClient.sendAsync({
      text: message,
      from: "allan.landin25@gmail.com",
      to: "allan.landin25@gmail.com",
      subject: `${name} te mandou mensagem pelo seu porfólio! - ${email}`,
    });
    console.log("Email enviado");
    console.log(result);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
