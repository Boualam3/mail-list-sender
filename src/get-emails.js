const fs = require("fs/promises")

const getEmails = async () => {
  try {
    const data = await fs.readFile(__dirname + "/resourse/emails.txt", "utf8")
    const emailsData = data
      .split("\n")
      .filter((item) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(item))
    const invalidEmail = data
      .split("\n")
      .filter((item) => !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(item))
    if (emailsData.length > 100)
      throw new Error("Please Provide 100 email addresses")
    return emailsData
  } catch (error) {
    console.log(error)
  }
}

module.exports = getEmails
