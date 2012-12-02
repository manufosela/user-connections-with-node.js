(English version after spanish version)

Conexión de usuarios con node.js usando websockets
==================================================

Ejemplo de un simple chat multiusuario usando node.js y la libreria socket.io

Requerimientos
==============

node.js (en ejemplo uso v0.8.4)
socket.io (npm install socket.io -g)

Ficheros
========

client.html
-----------
Aplicación cliente que conecta con el servidor para intercambiar información sobre usuarios conectados y mensajes que se envian y se reciben

server.js
---------
Aplicación servidor que mantiene abiertos los websockets con los clientes que se conecten y le transmite a todos, broadcast, los usuarios conectados y los mensajes que se intercambian

css/style.less
--------------
Fichero con los estilos CSS para el fichero client.html. Usa less para generar el css.

js/socket.io.js
---------------
Libreria de socket.io para el lado cliente

js/lib/jquery-1.8.2.min.js
--------------------------
Librería de jquery

js/lib/modernizr-2.5.3.min.js
-----------------------------
Librería javascript que detecta características html5 y css3 en el navegador del usuario.

js/lib/less.js
--------------
Librería javascript para generar css dinámicamente



************************************************
================================================



User connections with node.js using websockets
==============================================

It is a simple broadcast chat multiuser to connect and send messages using node.js and socket.io library

Requeriments
============
node.js (the example use v0.8.4)
socket.io (npm install socket.io -g)

Files
=====

client.html
-----------
Client application that it connects with the server to interchange information about other users connected and message sent and received

server.js
---------
Server application that maintains websockets opened with the clients connected and it transmit, broadcast, to all connected users, the interchanged messages

css/style.less
--------------

File with the CSS styles to the client.html file. It use less to generate the css styles.

js/socket.io.js
---------------
Socket.io client library

js/lib/jquery-1.8.2.min.js
--------------------------
Jquery library

js/lib/modernizr-2.5.3.min.js
-----------------------------
JavaScript library that detects HTML5 and CSS3 features in the user’s browser

js/lib/less.js
--------------
Javascript library to generate dinamic css.