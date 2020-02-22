from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify

app = Flask(__name__)

@app.route("/" , methods = ["GET"])
def index():
    return render_template("index.html")

@app.route("/audio_process" , methods = ["POST"])
def process_audio():

    print("Process request send")
    with open("test.wav" , "wb") as f:
        chunk_size = 4096

        while True:
            chunk = request.stream.read(chunk_size)
            if len(chunk) == 0:
                return jsonify({"response" : False})
            f.write(chunk)

        return jsonify({"response" : True})

    return jsonify({"response" : False})


if __name__ == "__main__":
    app.run(host = "0.0.0.0" , port = 5000 , debug = True)

