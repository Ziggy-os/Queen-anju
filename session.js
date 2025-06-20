//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RQeDkwV2NEcDl4NzhHbjZmeTl6NVF1SmQzck1uN3NEZ0JFem1JMW1Yaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTQ4dkdDU0hUU0ZKbmdJTit4K3prUlErdjRLZEQwR3ZXdmJqeTZFeEdRWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySVl2TlhHc1NrTlhFYXJjWldHQmdpVm5vcllXYXBRQU1qRlRDcmNwTFZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSGFQWVJxZURHcmVRMk1uWjRDL09xcmt1aUlXZ3lNTnhVZG5tMTBiT0dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGa1N4eHRnTGNBQnRScC9TY25HMEVwVHM2NG0zKzc2bVdVckFCV1Q3SGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDUjBVWXpjOVhiK0ZPUmozWU1VdGNhakZ1YzAxNzdRVHB4UXdoTnc4V1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tRdU5IdnZPeEtLK3hsRk51c0FEUFZNakFCWHRZSzhvWFFXNkZSN0FHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZC9LTmVCclZ0ZGFMMHBFWktHS2tZMzY2cnFsa0FyQzY5QUFYMjBueHprdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1oQ014UHRVUzl5bnh6Vy92RldaUWQ3LzBabUp3LzVaeVV3bVBqWUZ0eWhBeW5TZ3g0aStia2lKdXVzdDhvYXFIdXVtZytYb29HK29xKyt5Q21WcWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJZZ3FxRUx3b1l3NXhQTHlzSjNVazZnTWM3WEo1L2ppWlBENXNhNTNxNnc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwUE1IRGxzZlRtRzg1VmsxblRoZVNnIiwicGhvbmVJZCI6IjM5YzY5MDRmLTdiZTMtNDUxMS1iZTE1LTc2NjBkMGFkNzA1MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTnZZQThpcS92ZlgwSDJieFhVSzBqU2MrQkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2NPQ0thTnJ0aEtJYUJkUG9FdG5KVzJJSGo4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlZMVkyR1lGIiwibWUiOnsiaWQiOiI5NDc2ODM0NTA1NzoyM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjMxMzQ5NTg3MDUwNTA0OjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSldBNXlNUTBQM1Z3Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNTU2QTloL0J6RXdybDlqbldYV2kzNEdMTk90eVJnK0FKL2ttS3VUSmpIUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWmVTMjhlYUZZOG5VVEtSVFcydXBmY3JsbkZ6LzhnZEJNZXFiNzRQWkZXT1U2ZFpFYjJOeXY3dTEwRkhVellMeVk3ejVBcDFqMkJjdFhwclFLV2pSQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Imp5T0ViQXM0NWZFV1NVZTBORGZxVnVaSFFFM21TVjVMMVNoWXNqUC9XeDZWcExpM0lzejFkS2Q5MS8zT095c0JacTNJYThXZXU3cFFiMlFCOEFqNmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjgzNDUwNTc6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWVlZ1BZZndjeE1LNWZZNTFsMW90K0JpelRyY2tZUGdDZjVKaXJreVl4MCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDMzNTAxLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUt0eiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94768345057",
  PASSWORD: 
    process.env.PASSWORD || "chamod@8002",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94765635699"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
