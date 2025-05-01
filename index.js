const dayjs = require('./node_modules/dayjs');
import utc from './node_modules/dayjs/plugin/utc';
import timezone from './node_modules/dayjs/plugin/timezone';
document.addEventListener('DOMContentLoaded', buscarHorario());

function buscarHorario() {
    dayjs.extend(utc)
    dayjs.extend(timezone)

    const hora = dayjs().format('HH:mm')
    const dia = dayjs().format('DD, MMMM YYYY');
    const horario = document.getElementById('horario');
    const horas = document.createElement('h1');
    const datas = document.createElement('h2');

    horas.textContent = hora;
    datas.textContent = dia;

    horario.appendChild(horas);
    horario.appendChild(datas);
}