

$(document).ready(function() {

    let recordButton = $("#record");
    let stopButton = $("#stop");
    let soundClips = $(".sound-clips");

    let userMedia = navigator.mediaDevices.getUserMedia;
    initRecoder(stopButton , recordButton , soundClips);
});


