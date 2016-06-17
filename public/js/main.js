var socket = io.connect(window.location.hostname);

socket.on('time', function (data) {
    $('#countdown').html(data.time);
});

if (window.location.hash != '#display') {
    $('#start').click(function() {
        socket.emit('click:start');
    });
    
    $('#stop').click(function() {
        socket.emit('click:stop');
    });
    
    $('#reset').click(function() {
        socket.emit('click:reset');
    });
} else {
    $('.thoughtbot').hide();
}