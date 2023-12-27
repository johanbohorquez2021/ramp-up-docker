const cron = require('node-cron');
const { syncDB } = require('./Task/sync-db');

console.log('Inicio de la applicacion');

cron.schedule('1-59/5 * * * * *', syncDB);
 




