$document.ready(function(){
  namespace = '/manager';

  var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);


  socket.on('response', function(msg)) {
    <!-- 응답값을 받고 제어할 함수 입력. -->
  }
  socket.on('connect', function() {
    socket.emit('my event', {data: 'm connected!'});
  });
});
