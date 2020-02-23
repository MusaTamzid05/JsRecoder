

var constrains = { audio : true };
var mediaDevices = undefined;
var mediaRecord = undefined;

var recordButton = undefined;
var stopButton = undefined;
var sendButton = undefined;
var chunks = [];
var currentAudioBlob = undefined;
var soundClips = undefined;


function isSupported() {
    return  navigator.mediaDevices.getUserMedia === undefined  ? false  : true;
}

function getCurrentAudio() {
    return currentAudioBlob;
}

function initRecoder(stopButton_ , recordButton_ , sendButton_ ,  soundClips_  = undefined) {
    if(isSupported() === false) {
        alert("Recording not suppoted");
        return;
    }

    recordButton = recordButton_;
    stopButton = stopButton_;
    soundClips = soundClips_;
    sendButton = sendButton_;

    navigator.mediaDevices.getUserMedia(constrains).then(initMicrophone , onMicrophoneError);

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

    sendButton.click(function() {

        fetch("/audio_process" , {"method" : "POST" , "body" : currentAudioBlob})
            .then(response => {
                alert("We have a response")
            })
            .catch(err => {
                alert("Error in responose");
            });
    });

    mediaRecord.ondataavailable = function(event) {
        console.log("Recoding complete");
        chunks.push(event.data);
        console.log(chunks);
    }

    mediaRecord.onstop = function(event) {
        console.log(chunks);
        currentAudioBlob = new Blob(chunks , { "type" : "audio/wav" });
        console.log(currentAudioBlob);
        chunks = [];

        const audio = document.createElement("audio");
        audio.setAttribute("controls" , "");
        audio.control = true;
        const audioURL = window.URL.createObjectURL(currentAudioBlob);
        audio.src = audioURL;
        console.log(audio);


        if(soundClips === undefined)
            return;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";

        deleteButton.onclick = function(event) {
            let eventTarget = event.target;
            eventTarget.parentNode.parentNode.removeChild(eventTarget.parentNode);
        }


        const clipContainer = document.createElement("article");
        clipContainer.classList.add("clip");
        const clipLabel = document.createElement("p");
        clipLabel.textContent = soundClips.children().length;
        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.append(clipContainer);

    }
}

function onMicrophoneError(err) {
    alert(err);
}

