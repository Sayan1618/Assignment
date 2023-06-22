from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Sample pandas DataFrame


@app.route('/data', methods=['GET'])
def get_data():
    data = pd.read_csv(r'C:\Users\Sc\Documents\Sayan\data.csv')
    return jsonify(data.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
