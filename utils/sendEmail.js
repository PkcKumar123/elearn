import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "pkc243241@gmail.com",
      pass: "xsyleiflwcqytele",
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
