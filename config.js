/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require("sequelize")
const fs = require("fs")
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" })

// Özel Fonksiyonlarımız
function convertToBool(text, fault = "true") {
  return text === fault ? true : false
}

DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? "./whatsasena.db"
    : process.env.DATABASE_URL
DEBUG =
  process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG)

module.exports = {
  VERSION: "v1.2.8",
  SESSION:
    process.env.ASENA_SESSION === undefined ? "" : process.env.ASENA_SESSION,
  EXT: process.env.EXT === undefined ? undefined : process.env.EXT,
  LANG:
    process.env.LANGUAGE === undefined
      ? "EN"
      : process.env.LANGUAGE.toUpperCase(),
  HANDLERS: process.env.HANDLERS === undefined ? "^[.]" : process.env.HANDLERS,
  SEND_READ:
    process.env.SEND_READ === undefined
      ? false
      : convertToBool(process.env.SEND_READ),
  BRANCH: "master",
  HEROKU: {
    HEROKU:
      process.env.HEROKU === undefined
        ? false
        : convertToBool(process.env.HEROKU),
    API_KEY:
      process.env.HEROKU_API_KEY === undefined
        ? ""
        : process.env.HEROKU_API_KEY,
    APP_NAME:
      process.env.HEROKU_APP_NAME === undefined
        ? ""
        : process.env.HEROKU_APP_NAME,
  },
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./whatsasena.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: DEBUG,
        })
      : new Sequelize(DATABASE_URL, {
          host: "xxxxxx.eu-west-1.compute.amazonaws.com",
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          logging: DEBUG,
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
        }),
  NO_ONLINE:
    process.env.NO_ONLINE === undefined
      ? true
      : convertToBool(process.env.NO_ONLINE),
  CLR_SESSION:
    process.env.CLR_SESSION === undefined
      ? false
      : convertToBool(process.env.CLR_SESSION),
  SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
  DEBUG: DEBUG,
  REMOVEBG:
    process.env.REMOVEBG_KEY === undefined ? "false" : process.env.REMOVEBG_KEY,
  WARN_COUNT: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  WARN_MSG:
    process.env.WARN_MSG === undefined ? "Ok bie" : process.env.WARN_MSG,
  ANTIJID: process.env.ANTIJID === undefined ? "" : process.env.ANTIJID,
  STICKER_PACKNAME:
    process.env.STICKER_PACKNAME === undefined
      ? "🥰,lyfe00011"
      : process.env.STICKER_PACKNAME,
  BRAINSHOP:
    process.env.BRAINSHOP === undefined
      ? "159501,6pq8dPiYt7PdqHz3"
      : process.env.BRAINSHOP,
  DIS_BOT:
    process.env.DISABLE_BOT === undefined ? "null" : process.env.DISABLE_BOT,
  FIND_API_KEY:
    process.env.FIND_API_KEY === undefined
      ? "null"
      : process.env.FIND_API_KEY,
}
VISITOR_PRIVACY_METADATA=CgJUWhIEGgAgIg%3D%3D;__Secure-3PSID=g.a000qgiOR6dTqDOgpa2h4BOzl-qrzbRmc2LORBYPlQHp6ZLVRtEYCPqAN8DPH1P67uKiLtfExwACgYKAS0SARMSFQHGX2Mih6tKIgS0rtnzvamMpKqimBoVAUF8yKq4kYG5xT_MHTrve_4KjvuT0076;GPS=1;SIDCC=AKEyXzW-GEEhLGS6Tmqr8kc2ZrBvIs_O25SgSRtva1aWpybi9dZNkWZSiIO073OeM7R6MggayA;YSC=b-QYI5B9BiU;SID=g.a000qgiOR6dTqDOgpa2h4BOzl-qrzbRmc2LORBYPlQHp6ZLVRtEYH5n09fyFbekVcdA_--jD0wACgYKAT4SARMSFQHGX2MifHVZDfaZ7n5Hklrp1RMo8xoVAUF8yKpWARDFIj_GdQFInUf4xmbj0076;__Secure-1PSIDTS=sidts-CjEBQT4rX6BlJ83kenOSlsYZi5MNhiD-BDDtlfJ3JjZpLa4nWgLtPMtqM-UtYNElqBNNEAA;SAPISID=LbtGP3ffiA-xeCHg/APlHh2nLSKE8DwLwH;__Secure-1PSIDCC=AKEyXzXc7orTPEzRfJd0vkYWZmcdc5SdLuDuCPrU8qd01t2L1aRDxd3cZUHkeOAo90e2lEUV;SSID=AiRsTxMf6utkh2jiI;__Secure-1PAPISID=LbtGP3ffiA-xeCHg/APlHh2nLSKE8DwLwH;__Secure-1PSID=g.a000qgiOR6dTqDOgpa2h4BOzl-qrzbRmc2LORBYPlQHp6ZLVRtEYJMa3wtrHKbMG7XjtQXiqvQACgYKAXQSARMSFQHGX2MiUXWaRbphoZjzhqa4r31YexoVAUF8yKodSSUnOh4GWfvrCIT70JqX0076;__Secure-3PAPISID=LbtGP3ffiA-xeCHg/APlHh2nLSKE8DwLwH;__Secure-3PSIDCC=AKEyXzVCPSdF1drNLGHp36VOz8xNwhEA52LaY33M66XQanSyP_kZ4isDwz-QlKBxXYpFiZDJ;__Secure-3PSIDTS=sidts-CjEBQT4rX6BlJ83kenOSlsYZi5MNhiD-BDDtlfJ3JjZpLa4nWgLtPMtqM-UtYNElqBNNEAA;APISID=DxXljis2kQolVYGV/A4AjURcUZ7ySNwGHG;HSID=AZWQPfx9B2TdbEOKx;LOGIN_INFO=AFmmF2swRgIhAPpDdhlIt9RPWu6rWqTgFA-viczCyMpPZK3ZsKJQ3_KFAiEAxEJV_LjSAnMmQeg_mitmn6JfqZZrhz8MjZ7A1P-8_jE:QUQ3MjNmdzNYWDlqdkdKZWM4X3JJbGZKbHVOX01UcS1mMWN0b25JOHZfN1o1elk1c1NsZV8xVWkweFJPS1BkV2VVODlKN3U2NHcyNlcxX2Z2WWdCQmtYVTBGNkZqTHV5THE1YmdlNlBuN1FGYTNsUXNXX3pPUUQzNGdJNEk0N1hiOGt6OUVCaFJqMUdqMHVqX0pCNVFDMjFoUnNCNGF2ZUpB;PREF=f6=40000080&tz=Africa.Nairobi;VISITOR_INFO1_LIVE=b4krIV2EA60
