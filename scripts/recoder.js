

class Recoder {

    constructor() {
        this.supported = navigator.mediaDevices.getUserMedia;

        if(this.supported === false) {
            alert("Media device not supported");
        }

        console.log("Recoder supported!!");
    }

    initMicrophone(stream) {
        this.media_record = new MediaRecorder(stream);
        this.constrains = { audio : true };
    }

    record() {

    }

    play() {

    }

    stopRecording() {

    }
}
