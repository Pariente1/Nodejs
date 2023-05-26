function hola(nombre, miCallback){
    setTimeout(function(){
        console.log(`Hola, ${nombre}`);
        miCallback();
    },1500)
}

function adios(nombre, otroCallBack){
    setTimeout(function(){
        console.log(`Adios ${nombre}`);
        otroCallBack();
    }, 1000);
}



console.log('iniciando proceso...');
hola('Carlos', function() {
    adios('Carlos', function(){
        console.log('terminando proceso...');
    });
});

hola('Carlos', function(){});
adios('Carlos', function(){});