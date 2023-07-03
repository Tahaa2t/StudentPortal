from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/login', methods=['POST'])
def login():
    nuid = request['nuid']
    password = request['password']

    if nuid == '19k1366' and password == 'password':
        return jsonify({'success': True, 'message': 'Login successful'})
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'})

@app.route('/members')
def members():
    return {"members" : ["Member1", "Member2", "Member3"]}

if __name__ == '__main__':
    app.run(debug=True)