

var constrains = { audio : true };
var mediaDevices = undefined;
var mediaRecord = undefined;

var recordButton = undefined;

function isSupported() {
    return  navigator.mediaDevices.getUserMedia === undefined  ? false  : true;
}

function initRecoder(recordButton_) {
    if(isSupported() === false) {
        alert("Recording not suppoted");
        return;
    }

    recordButton = recordButton_;
    navigator.mediaDevices.getUserMedia(constrains).then(initMicrophone , onMicrophoneError);
}

function initMicrophone(stream) {
    mediaRecord = new MediaRecorder(stream);

    recordButton.click(function() {
        alert("Record button clicked");
    });

}

function onMicrophoneError(err) {
    alert(err);
}

