import {writeFile } from "fs/promises"

const path = "numeros.txt"

const createNumbers = async () => {
    try {
        let numbers='';
            for (let index = 1; index <=1000; index++) {
            numbers += index + '\n';
        }
        await writeFile (path,(numbers), 'utf8')
       
        console.log(`Archivo ${path} se a creado exitosamente`)
    } catch (error) {
        console.log(error, 'hay un error en el codigo')
        
    }
}

createNumbers()