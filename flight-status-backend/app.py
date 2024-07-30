from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.json_util import dumps

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/flightstatus"
mongo = PyMongo(app)
CORS(app)

@app.route('/api/flights', methods=['GET'])
def get_flights():
    airline_name = request.args.get('airline_name')
    flight_number = request.args.get('flight_number')
    
    query = {}
    if airline_name:
        query["airline.name"] = airline_name
    if flight_number:
        query["flight.number"] = flight_number

    flights = mongo.db.flights.find(query)
    return dumps(flights)

if __name__ == '__main__':
    app.run(debug=True)
