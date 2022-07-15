import { SendEmail } from "../../utils/email.js";

import express from "express";

export const emailRouter = express.Router();

emailRouter.post("/", async (request, response) => {
  //grabs the sender,subject,body.
  const { sender, subject, body } = request.body;

  //checks if everything arrived
  if (!subject) return response.status(400).send({ error: "subject missing" });

  try {
    await SendEmail(sender, subject, body);
    response.status(200).json({ message: "message sent" });
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: "problem sending the message" });
  }
});
