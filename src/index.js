const nodemailer = require("nodemailer")
const getEmails = require("./get-emails")
require("dotenv").config()

async function sendToMultipleEmails(service, myEmail, myPass, subject, text) {
  try {
    let transporter = nodemailer.createTransport({
      service: service,
      auth: {
        user: myEmail,
        pass: myPass,
      },
    })
    const emailsData = await getEmails()
    if (!emailsData) return
    const options = {
      from: myEmail,
      to: emailsData,
      subject: subject,
      text: text,
    }

    let info = await transporter.sendMail(options)

    console.log("Message sent: %s", info)
    //* Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //* Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    //* Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.log(error)
  }
}

let subject = "Sending email with node js"
let text = "Test sending to multiple users "

sendToMultipleEmails(
  "hotmail",
  process.env.EMAIL,
  process.env.PASSWORD,
  subject,
  text
)

//!=============================================================
