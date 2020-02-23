

$(document).ready(function() {

    let recordButton = $("#record");
    let stopButton = $("#stop");
    let sendButton = $("#send");
    let soundClips = $(".sound-clips");

    initRecoder(stopButton , recordButton , sendButton , soundClips);
});


