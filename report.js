const { MailSlurp } = require("mailslurp-client");
const mailslurp = new MailSlurp({ apiKey: 'e55017677291d138fc62869c4e2bb32199618a8d5a9f28665f5d707a3a46afeb' });
const fs = require('fs');
const path = require("path");


const value = "c18b38d3-8103-4a80-8f6c-7eb688ed9926";
const file = fs.readFileSync(path.resolve(__dirname, "./cypress/videos/test_project.js.mp4"));

async function test() {
    const [id] = await mailslurp.uploadAttachment({
        base64Contents: Buffer.from(file).toString("base64"),
        contentType: "",
        filename: ""
    });
    await mailslurp.sendEmail(value, {
        to: ["testercheck@yopmail.com"],
        attachments: [id]
    });
};
test();