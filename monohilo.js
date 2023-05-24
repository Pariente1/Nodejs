console.log('hola mundo');

let i=0;
setInterval(function(){ // SetInterval me permtie ejecutar una función cada n cantidad de tiempo, por lo que quiere que recibe como argumentos: Función a ejecutarse, intervalo de tiempo.
    console.log(i);
    i++;

    if (i === 5) {
        var a = 3 + z;
    }
}, 1000);


//A tener  en cuenta esta función no se detiene y continúa su ejecución ad infinitum.
// Detener ejecución con ctrl+ alt + m en Run Code, o con Ctrl +c en la terminal