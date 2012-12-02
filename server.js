/*
    Basic Chat Connection Demo - Server

    You can see, using the same url in different browsers, different nicks that introducing these are appearing on all screens

    author: @manufosela
    [2012-11-29]
*/

/**
* Servidor web para ficheros html
*
* Web server to html files
*/
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8080);


/**
* Servidor de chat usando websockets
*
* Chat server using websockets
*/
var io = require('socket.io').listen(9080),
    aUserList = [];

io.set('log level', 1);  // To avoid debug info. Comment this line if you want to see it

io.sockets.on('connection', function ( socket ) {

  console.log( "connection " )
  console.log( "users logged: " + aUserList.length );
  socket.emit( 'connection ok' );
  if ( aUserList.length > 0 ) {
    socket.emit( 'userlist' , { userlist: aUserList } );
  }

  socket.on('set nickname', function ( name ) {
    console.log( "setting nickname..." );
    if ( name ) {
      if ( !~aUserList.indexOf(name) ) {
        socket.set( 'nickname', name, function () { socket.emit('login ok'); });
        //aSockets[name] = socket;
        aUserList.push(name);
        senduserlist();
        console.log( "Set nickname " + name );
      } else {
        socket.emit( 'login fail', { namenovalid: name } );
        console.log( "Nickname '" + name + "' ya existe" );
      }
    } else {
      socket.emit('login fail' );
      console.log( "Nickname nulo" );
    }
  });

  socket.on('msg', function ( data ) {
    socket.get('nickname', function ( err, name ) {
      console.log('Chat message from', name);
      console.log(data);
      io.sockets.emit( 'message' , { from: name, msg: data } );
    });  
  });

  socket.on( 'disconnect', function ( data ) {
    console.log( "desconectado " + data );
    socket.get( 'nickname', function ( err, name ) {
      console.log( 'Se desconecta ' + name + "(" + err + ")" );
      aUserList.splice( aUserList.indexOf(name), 1 );
      senduserlist();
    });
  });

  senduserlist = function() {
    console.log("Enviando por broadcast la lista de usuarios conectados " + aUserList );
    io.sockets.emit( 'userlist' , { userlist: aUserList } );
  }

});
