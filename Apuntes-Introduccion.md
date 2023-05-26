# NodeJs

NodeJS es un entorno de ejecución de JavaScript fuera del navegador. Se crea en 2009, orientado a servidores. 

>Es muy importante que esté fuera del navegador debido a que ya no es necesario un navegador web para ejecutar código JavaScript.

Características principales de JavaScript:

**Concurrencia**: Es monohilo, con entradas y salidas asíncronas.

**Motor V8**: Creado por Google en 2008 para Chrome. Escrito en C++. Convierte JS en código máquina en lugar de interpretarlo en tiempo real.

>Todo funciona en base a Módulos, que son piezas de código muy pequeñas que modularizan nuestros sistemas y ayudan a entender mejor el código.

**Orientación a Eventos**, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la lógica de “Cuando sucede algo, se ejecuta esta parte de mi código y eso a su vez dispara otra parte”.

## EventLoop: asíncrona por diseño

**Event Queue**: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

**Event Loop**: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

**Thread Pool**: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

### Problemas del monohilo

**Importante**: Cuando ocurre un error dentro de alguno de los hilos y no se controla apropiadamente (*catch*); Node detiene todos los hilos ejecución. 

>Esto puede ser muy peligroso, debido a que es dificil determinar fue el origen del problema y en que punto de ejecución se encontraba cada hilo cuando fue detenido.

## NODEMON Y PM2

Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose
nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

Para instalar:
>sudo npm install -g nodemon

Para instalar PM2
sudo npm install -g pm2

PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7. Este demonio se usa principalmente en produccion.

Voy a poner monitorizar el código para saber si algo se rompe.

>Me permite ver dashboards de mi código, puedo ver que está corriendo.

Puedo ver el rendimiento de mi cpu
Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.

