const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.retrieveAllApplications = functions.https.onCall(async () => {
  const applications = db.collection("applications").where("status", ">", 0);
  var userData = await applications.get();
  var res = [];
  userData.forEach(element => {
    res.push(element.data());
  });
  return res;
});
