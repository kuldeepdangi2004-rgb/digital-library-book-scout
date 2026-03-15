const express = require("express");
const cors = require("cors");
const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const app = express();
app.use(cors());
app.use(express.json());

// Watson Assistant setup
const assistant = new AssistantV2({
  version: "2021-06-14",
  authenticator: new IamAuthenticator({
    apikey:  "F9Ta0BlRfvXFSOsiNj52ltHOvEOrWsMu3Ava6hgWYlu_",
  "iam_apikey_description": "Auto-generated for key crn:v1:bluemix:public:conversation:au-syd:a/a2653b1aaac44384a1ac1b321e0e3da7:75095f08-8cc7-4a7a-83b2-3043a63f1581:resource-key:5fa81b61-8f00-49c4-8207-b754d393853b",
  "iam_apikey_id": "ApiKey-52409d05-b2d1-42ef-a7a6-f45d4f3cae81",
  "iam_apikey_name": "Service-credentials-1",
  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/a2653b1aaac44384a1ac1b321e0e3da7::serviceid:ServiceId-e5c51944-b1f6-4c09-9133-cf88f4357f09",
  }),
  serviceUrl:  "https://api.au-syd.assistant.watson.cloud.ibm.com/instances/75095f08-8cc7-4a7a-83b2-3043a63f1581",
});

const assistantId = "8107d754-fc75-4e47-b454-425288b2beb9D";

// Chat API
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const session = await assistant.createSession({ assistantId });

    const response = await assistant.message({
      assistantId,
      sessionId: session.result.session_id,
      input: { text: userMessage },
    });

    const botReply =
      response.result.output.generic[0].text;

    res.json({ reply: botReply });
  } catch (error) {
    res.status(500).send("Error communicating with Watson");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});