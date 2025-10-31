import nodemailer from 'nodemailer';

export async function POST(req) {
  
  try {
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_APP_PASSWORD, // Your email password 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email
      replyTo:email,
      subject: `Contact from ${name}`,
      text: message,
    };
    
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    
    return new Response(JSON.stringify({ message: 'Error sending email', error:error.message }), {
      status: 500,
    });
  }
}

export const GET = () => new Response('Method GET Not Allowed', { status: 405 });
