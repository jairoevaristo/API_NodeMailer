import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: 2525,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS
  }
});

export default async (email: string, title: string, password: string) => {
  await transporter.sendMail({
    from: email,
    to: `<Administrador> ${process.env.AUTH_EMAIL_TO}`,
    subject: title,
    html:`
        <h1>Sua senha foi redefinida</h1><br />
        <p>Sua nova senha é: <strong>${password}</strong></p>
      `,
})};