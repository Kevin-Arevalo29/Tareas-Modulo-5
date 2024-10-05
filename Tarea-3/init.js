import esperarSegundos from "./async.js";

 
const ejecutar = async ()=>{
    console.log ("iniciando");
    await esperarSegundos(3);
    await esperarSegundos(2);
    await esperarSegundos(1);
    console.log("Finalizado");
} 
ejecutar()