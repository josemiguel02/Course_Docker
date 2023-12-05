const cron = require('node-cron');

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
  times++;

  console.log('Tick cada 5 segundos', times);
});

console.info('Inicio de la tarea cron');
