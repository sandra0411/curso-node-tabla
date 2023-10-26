const fs = require('fs');
var colors = require('colors/safe');


const crearArchivo = async (base = 5, listar= false, hasta= 10) => {

    try{
    
        let salida = '';
        let consola = '';
    
        for (i = 1; i <= hasta; i++) {
    
            salida += (`${base} x ${i} = ${base * i}\n`)
            consola += (`${base} ${colors.green('x')} ${i} = ${base * i}\n`)
        }

        if(listar){
            console.log('====================');
            console.log(colors.red('   Tabla del: '), colors.green(base));
            console.log('====================');

            console.log(colors.blue(consola));
        }
        
        //el primer parametro path, si no se lo ponemos entero, nos toma
    //la ubicacion de este archivo y lo pone a la misma altura
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`
    }

    catch(err){
        throw err 
    }
    
}


//Exportamos el archivo
module.exports = {
    crearArchivo
}