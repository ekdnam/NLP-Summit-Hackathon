import pickle
import json

def read_json(infile = 'transcript.json', outfile = 'result.json'):
    with open(infile, 'r') as f:
        data = json.loads(f)

    output_dict = {
        "Disease": "Diabetes",
        "Description": "High blood sugar"
    }

    with open(outfile, 'w') as  f: 
        json.dumps(output_dict, f)

    print(1)

if __name__ == '__main__':
    read_json()