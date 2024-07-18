//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2349137594086";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dGZFNEdUxTVFhQeVBzWWNINk8rZUxLNU5VTGRxL0ZpWXFLWEJicUhIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibCtHVVl5MFZwSDdWVmpBaHdidHptQndrMjVub2VSdE4za2JobWt2Q3R4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUDJMWlpLTlRSNmE0ZC9HWVFUQzRSd0xWSHFPUEdZVmFUbXJiNlQxVTJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3eU8xeTJ3SVA0N0ZkMDhLWHZkK0VhczhhMEhQaUx6c3RYSHM4TlgvQ0dzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQK2p3UWRSR3lZaUhkenU2bHpYV21kRCtkd093YW9uZjNJV2Zlb2JFRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5WQkdXVjlIS25tU0NVK2Q1R2plK3dHV0FNVVJDUm42NFdOMDZ6MGl2azA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUROOEFBQXVMTDBzUm4zbG9NSUNkSHhXRWlCdTg4RUxsM096eFBYQmNrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXd0a0lYS2ZMWWJVM2lXL1FRYUFjQjlrTDRsRWQ2SWdBeE94TnJqQWNEdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNVays4endIWTVDQTJjYVc1bzdwb3JzRHA2SmtTeGdPYzE4YkdkOVZWZ3JRdkl3dXhJUnJtYXlMSm5aNkRDbUU0ellEK3FpY3BQMk9CNXBobk9IM0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJMNVZkV1pRSzlWNTA3Z2pQTTdvQnN1VnhQd1R0aUVDQlg2NDFYOVJjTkE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyVDFPcGxqblIteUllQ2FneS10MGxBIiwicGhvbmVJZCI6ImQyYWZkMGZmLWMzMjYtNGMyMS04YTkxLTcwNGIxNmJiMWIzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtN0JVUXlQMXBNYW40VzRyTTFuTGJDVzIrRUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlpiTCs5UDMzMmw5YXd2N0xENVh5RmZwaC80PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc4Wk5ZRlZWIiwibWUiOnsiaWQiOiIyMzQ5MTM3NTk0MDg2OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVtbWFudWVsIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWFMxdVlGRUk2TDI3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNZ2JFTkxpc1crdEszK3ZBZjlRWlh6ZDJLVUVDSFkyS0p4ZXdNT0ZSdUMwPSIsImFjY291bnRTaWduYXR1cmUiOiI1bmoybGo0SE9iQnNuQm5uTDZ1ZGdqZkNTcUhocFdPZzhnY2Vja3RpQU95Tis5TWF5MWtwSjNTcU1BYi9oSlJPdW1nKzhZQ2VCb0xvQVZqbjhnVy9BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTjBsSjF3bzFVTTlZNnRUa3RFYjIrZytnc2FPQnIrNzkwRUI4MlVqbUQ5TEVFUHk2aFYvMHFMdXgyS2N1cmJsRWVvbVdadkxra3E2MGxaWG5yTis0QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM3NTk0MDg2OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRJR3hEUzRyRnZyU3QvcndIL1VHVjgzZGlsQkFoMk5paWNYc0REaFViZ3QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExNTcwMTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHFTIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released by Қɪ尺Λ| enjoy your time| this is Қɪ尺Λ 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Қɪ尺Λ",
  packname: process.env.PACK_NAME || "Қɪ尺Λ♥️",
  botname: process.env.BOT_NAME || "Қɪ尺Λ-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Қɪ尺Λ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
