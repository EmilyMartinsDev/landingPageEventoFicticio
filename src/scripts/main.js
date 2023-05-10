AOS.init();

const dataEvent = new Date("May 20, 2023 19:00:00");
const timeStampEnvent = dataEvent.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime();

    const distanciaAteEnvento = timeStampEnvent - timeStampAtual;

    const dia = 24 * 60 * 60 * 1000;
    const hora = 60 * 60 * 1000;
    const minuto = 60 * 1000;

    const diasRestantes = Math.floor(distanciaAteEnvento / dia);
    const horasRestantes = Math.floor((distanciaAteEnvento % dia) / hora);
    const minutosRestantes =  Math.floor((distanciaAteEnvento % hora) / minuto);
    const segundosRestantes = Math.floor((distanciaAteEnvento % minuto) / 1000);

    document.getElementById('contador').innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}seg`

    if(distanciaAteEnvento < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML ="Evento expirado";
    }
},1000)
