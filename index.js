const dayjs = require('./node_modules/dayjs');
import utc from './node_modules/dayjs/plugin/utc';
document.addEventListener('DOMContentLoaded', buscarHorario());

function buscarHorario() {
    dayjs.extend(utc)

    const hora = dayjs().format('HH:mm')
    const dia = dayjs().format('DD, MMMM YYYY');
    const horario = document.getElementById('horario');
    const horas = document.createElement('h1');
    const datas = document.createElement('h2');

    horas.setAttribute('id', 'hora');
    datas.setAttribute('id', 'dia');

    horas.textContent = hora;
    datas.textContent = dia;

    horario.appendChild(horas);
    horario.appendChild(datas);
}