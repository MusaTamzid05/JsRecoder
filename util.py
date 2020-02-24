import wave
import struct

def write_data(audio_data , path = "test.wav"):
    sample_rate = 44100.0
    freg = 440.0

    with wave.open(path , "wb") as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(sample_rate)
        f.writeframesraw(audio_data)

        for data in audio_data:
            current_data = struct.pack("<h" , data)
            f.writeframesraw(current_data)



