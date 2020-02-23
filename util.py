import wave

def write_data(data , path = "test.wav"):
    sample_rate = 44100.0
    freg = 440.0

    with wave.open(path , "w") as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(sample_rate)
        f.writeframesraw(data)



