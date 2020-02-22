

var constrains = { audio : true };
var mediaDevices = undefined;
var mediaRecord = undefined;

var recordButton = undefined;
var playButton = undefined;
var stopButton = undefined;

function isSupported() {
    return  navigator.mediaDevices.getUserMedia === undefined  ? false  : true;
}

function initRecoder(playButtton_ , stopButton_ , recordButton_) {
    if(isSupported() === false) {
        alert("Recording not suppoted");
        return;
    }

    recordButton = recordButton_;
    playButton = playButtton_;
    stopButton = stopButton_;

    navigator.mediaDevices.getUserMedia(constrains).then(initMicrophone , onMicrophoneError);
}

function initMicrophone(stream) {
    mediaRecord = new MediaRecorder(stream);

    recordButton.click(function() {
        alert("Record button clicked");
    });

    playButton.click(function() {
        alert("Play button clicked");
    });

    stopButton.click(function() {
        alert("Stop button clicked");
    });

}

function onMicrophoneError(err) {
    alert(err);
}

