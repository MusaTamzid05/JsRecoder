

$(document).ready(function() {

    let recordButton = $("#record");
    let stopButton = $("#stop");
    let sendButton = $("#send");
    let soundClips = $(".sound-clips");

    let userMedia = navigator.mediaDevices.getUserMedia;
    initRecoder(stopButton , recordButton , sendButton , soundClips);
});


