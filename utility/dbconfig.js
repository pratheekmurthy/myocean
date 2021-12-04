require('dotenv').config()

const user = process.env.username || 'MYOCEAN'
const host = process.env.hostname || '140.238.248.183'
const database = process.env.dbname || 'QBSO12C'
const password = process.env.password || 'Q#my0cean21'

module.exports = {
  user: user || "MYOCEAN",
  password: password || "Q#my0cean21",
  connectString : `${host}/${database}` || "140.238.248.183/QBSO12C",
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};