require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const Mailgun = require("mailgun.js");
// const formData = require("form-data");

const app = express();
app.use(express.json());
app.use(cors());

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({
//   username: "SAILLARD",
//   key: process.env.MAILGUN_API_KEY,
// });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome",
  });
});

app.post("/form", async (req, res) => {
  try {
    const { firstname, lastname, email, message } = req.body;
    console.log(firstname, lastname, email, message);
    const messageData = {
      from: `${firstname} ${lastname} <${email}>`,
      to: "vincent.saillard@hotmail.fr",
      subject: "New form submission",
      text: message,
    };

    // const response = await client.messages.create(
    //     process.env.MAILGUN_DOMAIN_SANDBOX,
    //     messageData
    //   );

    res.status(200).json(messageData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(400).json({
    message: "This route does not exist",
  });
});

app.listen(3000, () => {
  console.log("server started");
});
