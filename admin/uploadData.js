// uploadData.js
const { db } = require('./adminConfig');
const fs = require('fs');
require('dotenv').config();

const jsonFilePath = "./Quiz_questions.json"


const rawData = fs.readFileSync(jsonFilePath);
const data = JSON.parse(rawData);


const uploadData = async () => {
  for (const record of data) {
    await db.collection('questions').add(record);
  }
  console.log('Data successfully uploaded!');
};

uploadData().catch(console.error);
