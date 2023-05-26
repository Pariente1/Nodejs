function hola(nombre, miCallback){
    setTimeout(function(){
        console.log(`Hola, ${nombre}`);
        miCallback();
    },1500)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla');
        callbackHablar();
    }, 1000);
};

function adios(nombre, otroCallBack){
    setTimeout(function(){
        console.log(`Adios ${nombre}`);
        otroCallBack();
    }, 1000);
}

function conversacion(nombre, vecesHablado, callback){
    if (vecesHablado > 0){
            hablar(function(){
        conversacion(nombre, --vecesHablado, callback);
        });
    }else {
        adios(nombre, callback);
    }
};

// -- 

console.log('iniciando proceso...');
hola('Carlos', function (nombre) {
    conversacion(nombre, 30, function(){
        console.log('proceso terminado');
    })
});
/* hola('Carlos', function(nombre){
    adios(nombre, function(){
        console.log('Terminamos');
    })
}) */



/* hola('Carlos', function(nombre) {
    adios('Carlos', function(){

        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log('terminando proceso...');
                })
            });
        });
        console.log('terminando proceso...');
    });
}); */
