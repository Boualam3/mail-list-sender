const fs = require("fs/promises")

const getEmails = async () => {
  try {
    const data = await fs.readFile(__dirname + "/resourse/emails.txt", "utf8")
    const emailsData = data.split("\n")
    return emailsData
  } catch (error) {
    console.log(error)
  }
}

module.exports = getEmails
