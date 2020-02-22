

$(document).ready(function() {

    let recordButton = $("#record");
    let playButton = $("#play");
    let stopButton = $("#stop");

    let userMedia = navigator.mediaDevices.getUserMedia;
    initRecoder(playButton , stopButton , recordButton);
});


