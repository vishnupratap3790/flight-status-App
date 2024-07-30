import json
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client.flightstatus
collection = db.flights

with open('flights.json') as f:
    data = json.load(f)
    if isinstance(data, dict) and "data" in data:
        try:
            collection.insert_many(data['data'])
            print("Data inserted successfully")
        except Exception as e:
            print("An error occurred:", e)
    else:
        print("Invalid JSON structure")

