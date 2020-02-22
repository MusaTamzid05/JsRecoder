

var constrains = { audio : true };
var mediaDevices = undefined;
var mediaRecord = undefined;

var recordButton = undefined;
var playButton = undefined;
var stopButton = undefined;
var chunks = [];
var currentAudioBlob = undefined;


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

    playButton.disabled = false;
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

    stopButton.click(function() {
        mediaRecord.stop();
        console.log(mediaRecord.state);
        recordButton.disabled = false;
        stopButton.disabled = true;

        recordButton.css("color" , "black");
        recordButton.prop("disabled" , false)
        stopButton.prop("disabled" ,  true)

    });

    mediaRecord.ondataavailable = function(event) {
        console.log("Recoding complete");
        chunks.push(event.data);
        console.log(chunks);
    }

        mediaRecord.onstop = function(event) {
        console.log(chunks);
        currentAudioBlob = new Blob(chunks , { "type" : "audio/ogg;codecs=opus" });
        console.log(currentAudioBlob);
        chunks = [];
    }
}

function onMicrophoneError(err) {
    alert(err);
}

