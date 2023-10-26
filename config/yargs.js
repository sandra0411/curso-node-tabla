
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check( (argv, options) => {

                if( isNaN( argv.b)) {
                    throw 'la base tiene que ser un número'
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                default: false,
                type: 'boolean',
                describe: 'Muestra la tabla en consola'

            })
            .option('h', {
                alias: 'hasta',
                default: 10,
                type: 'number',
                describe: 'Hasta qué número multiplicamos una tabla'
            })
            .argv;

module.exports= argv;