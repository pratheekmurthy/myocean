require('dotenv').config()

const user = process.env.dbusername || 'MYOCEAN'
const host = process.env.dbhostname || '192.168.10.100'
const database = process.env.dbname || 'QBSO12C'
const password = process.env.password || 'Q#my0cean21'

module.exports = {
  user: user || "MYOCEAN",
  password: password || "Q#my0cean21",
  connectString : `${host}:1521/${database}` || "192.168.10.100:1521/QBSO12C", 
  poolMin : 30, poolMax : 150, poolTimeout: 1000
};