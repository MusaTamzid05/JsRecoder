import os

def clean_wave(src_path , dst_path = "clean.wav"):
    os.system("ffmpeg -i '{}' -f wav  -acodec pcm_s16le -ar 22050 -ac 1 '{}'".format(src_path , dst_path))
