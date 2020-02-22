

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

    playButton.disabled = true;
    stopButton.disabled = true;
}

function initMicrophone(stream) {
    mediaRecord = new MediaRecorder(stream);

    recordButton.click(function() {
        mediaRecord.start();
        console.log(mediaRecord.state);
        recordButton.css("color" , "red");
        recordButton.prop("disabled" , true)
        stopButton.prop("disabled" ,  false)

    });

    playButton.click(function() {
        alert("Play button clicked");
    });

    stopButton.click(function() {
        mediaRecord.stop();
        console.log(mediaRecord.state);
        recordButton.disabled = false;
        stopButton.disabled = true;

        recordButton.css("color" , "black");
        recordButton.prop("disabled" , false)
        stopButton.prop("disabled" ,  true)

    });

}

function onMicrophoneError(err) {
    alert(err);
}

