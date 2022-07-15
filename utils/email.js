import { MAILJET0, MAILJET1, PORT } from "./config.js";
import Mailjet from "node-mailjet";

const mailjet = Mailjet.apiConnect(MAILJET0, MAILJET1);
export function SendEmail(id, subject) {
  console.log(id);
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "fj.novoap@gmail.com",
          Name: "Francisco",
        },
        To: [
          {
            Email: subject,
            Name: "Francisco",
          },
        ],
        Subject: `messaje you created an account`,
        TextPart: `new account autentication`,
        HTMLPart: `<div><h1>Activa tu nueva cuenta en este link</h1>
          <a href=${`http://localhost:${PORT}/api/users/activate/${id}`}>link</a></div>`,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });

  request
    .then(result => {
      console.log(result.body);
    })
    .catch(err => {
      console.dir(err);
    });
}
