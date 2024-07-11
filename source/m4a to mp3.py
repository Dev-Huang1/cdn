import os
import easygui
from pydub import AudioSegment

def convert_m4a_to_mp3(m4a_file_path, mp3_file_path):
    # Load the M4A file
    audio = AudioSegment.from_file(m4a_file_path, format="m4a")
    
    # Export the audio as an MP3 file
    audio.export(mp3_file_path, format="mp3")

def convert_directory(input_directory, output_directory):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    print(input_directory)
    for filename in os.listdir(input_directory):
        if filename.endswith(".m4a"):
            print(f"Converting {filename}")
            m4a_file_path = os.path.join(input_directory, filename)
            mp3_file_name = os.path.splitext(filename)[0] + ".mp3"
            mp3_file_path = os.path.join(output_directory, mp3_file_name)
            
            convert_m4a_to_mp3(m4a_file_path, mp3_file_path)
            print(f"Converted {filename} to {mp3_file_name}")

if __name__ == "__main__":
    yee = easygui.enterbox("Please ente the Path","Please ente the Path")
    input_directory = yee  # Replace with your input directory path
    output_directory = "output"
    convert_directory(input_directory, output_directory)
    print(f"Conversion complete for all files in {input_directory}")
