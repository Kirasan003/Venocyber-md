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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtaSU9sdURzS3c4MDVqZ29KS2Rnc1dwTWJja0w4TnRMVkNLSWIzYnprRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGRSWncrNlRSdHBESVBmc25FR1pZaFYrVnlRczZqM1YxOEtyUzlMQmx4ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSlZaKzhzTzFxMExqSzlvdXpyT1B6T0xZMCs1VU93ekVUMGs5aTZ0aEdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaSTFwQzBRb3VCZ1hWd21yMEZoaFBVTCs4WXR1T216dzdsRC9LcWpOTmwwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHdll0S3hGZktjM2NMck1hT0MxbjhsdmYzckNnbW1UWE02NHFsY1F2M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE3QzZlaGc3OWc2bzhEQXErczhMZ0l3UHR4U0tqQXU0UGdsTjVSWGlsVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlDMDVVblVTS3AwSDA4cmEydGxzSHp1ekNSKzdwc2x5bkt1WWJmUm5YRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWhOeUR6cDZSMnl1OCtkMVVXL3RiaUVFbUVYV2pWNC9BMllsamEyK1cxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpFVWh0U1d1elFmVCtWTSsrVVVYVVdUeU91R3dqRmgyVE5EeDNvc1pLempuNldpbW8xMTRlN1VrcTY5OEFCNFIvSisxSXFCS3k2cnRlOGhKSWhqeGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Ijk2TFhpLzVUMVRWK0o3TjRBdTBqRFl5SVBhbENKbCt4S3RJcUFjUnpNLzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVTZFFRUmpNUk1DUGZnUUFtbHNIOWciLCJwaG9uZUlkIjoiMmVlN2FiZTUtYjYwYS00YzkwLTgwZmUtNjhiYzY5MzQzZTk3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN2T3BkWG5PZ0ZmMjNRak1tblpIV29Ydy9QST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMHpRQmsvazdQMnlPU244OFJiWEtqcmJVVkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1RTMUg3VEYiLCJtZSI6eyJpZCI6IjIzNDkxMzc1OTQwODY6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRW1tYW51ZWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tmUzF1WUZFUC9TNDdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1nYkVOTGlzVyt0SzMrdkFmOVFaWHpkMktVRUNIWTJLSnhld01PRlJ1QzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1QV1hBVGNCR0s3MVkxVVhTdktVZC94SE55cnJ1eTZZT3VFQzRHT0I4b20zL3F3dmR3VXBhU1VOalZGNkRZQjBOTG1QNHVtSVduRXA5SFYvUGJkVkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzTE5MNUE0bFBNblNKbC90VHhGOHY5a0FIa0RNRENzZHJsUHJOaDduWXNMMy9Xbk5vTGFYSUpxeFpKR0s5M2NjVUFRSmY2VDh1eHBQVzVMNFBQdStoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzc1OTQwODY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVElHeERTNHJGdnJTdC9yd0gvVUdWODNkaWxCQWgyTmlpY1hzRERoVWJndCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI5NzI5MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMcVMifQ=="
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
