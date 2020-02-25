from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
import os

from util import clean_wave

app = Flask(__name__)

@app.route("/" , methods = ["GET"])
def index():
    return render_template("index.html")

@app.route("/audio_process" , methods = ["POST"])
def process_audio():
    temp_audio_path = "./temp.wav"
    clean_audio_path = "./clean.wav"

    if os.path.isfile(clean_audio_path):
        os.remove(clean_audio_path)

    with open(temp_audio_path , 'wb') as f:
        f.write(request.data)

    clean_wave(temp_audio_path , clean_audio_path)
    os.remove(temp_audio_path)

    return jsonify({"response" : True})


if __name__ == "__main__":
    app.run(host = "0.0.0.0" , port = 5000 , debug = True)

