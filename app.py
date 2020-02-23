from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify

from util import write_data

app = Flask(__name__)

@app.route("/" , methods = ["GET"])
def index():
    return render_template("index.html")

@app.route("/audio_process" , methods = ["POST"])
def process_audio():

    with open("./test.wav" , 'wb') as f:
        f.write(request.data)

    return jsonify({"response" : True})


if __name__ == "__main__":
    app.run(host = "0.0.0.0" , port = 5000 , debug = True)

