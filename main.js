// meses y dias
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const dias = [
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
    "Lunes",
    "Martes",
];

// fecha anunciada
const fechaInicial = document.querySelector(".product-content__subtitle");

// conteo regresivo
const indicadoresFecha = document.querySelectorAll(".time-number__number");

// fecha limite
const fechaLimite = new Date("2024-08-23T07:25:00");

const dia = dias[fechaLimite.getDay()];
const fecha = fechaLimite.getDate();
const mes = meses[fechaLimite.getMonth()];
const year = fechaLimite.getFullYear();
const hora = fechaLimite.getHours();
const mins = fechaLimite.getMinutes();

fechaInicial.innerText = 
`Disponible hasta el ${dia} ${fecha} de ${mes} del ${year} a las ${hora}:${mins}am`

// extraer tiempo restante
function countDown() {
    //fecha actual
    const fechaActual = new Date().getTime();

    // tiempo
    // 1sec = 1000ms
    // 1min = 60sec
    // 1hr 60mins
    // 1dia 24hrs
    const dia = 24 * 60 * 60 * 1000;
    const hora = 60 * 60 * 1000; 
    const minuto = 60 * 1000;

    // calcular tiempo
    const tiempo = fechaLimite.getTime() - fechaActual;

    let diasRestantes = Math.floor(tiempo / dia);
    let horasRestantes = Math.floor((tiempo % dia ) / hora);
    let minutosRestantes = Math.floor((tiempo % hora) / minuto);
    let segundosRestantes = Math.floor((tiempo % minuto) / 1000);
    
    const values = [diasRestantes, horasRestantes, minutosRestantes, segundosRestantes];
    
    // formato para agregar 0
    function format(e){
        if(e < 10){
            return (e = `0${e}`);
        }
        return e;
    }

    indicadoresFecha.forEach((indicador, indice)=> {
        indicador.innerText = format(values[indice]);
    });

    if(tiempo < 0){
        clearInterval(conteoFecha);
        document.querySelector('.product-time').innerHTML = '<h3>Lo sentimos, el producto ya no está disponible.</h3>   '
    }
}

const conteoFecha = setInterval(countDown, 1000);

countDown();
