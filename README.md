# Flight Status Checker

This project is a web application that allows users to check the status of flights. Users can search for flight status by providing the airline name and flight number. The backend is built using Python (Flask) and the frontend is built using React with Firebase for notifications.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Notifications](#notifications)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
├── backend
│ ├── app.py
│ ├── flights.json
│ ├── load_data.py
│ ├── run.py
│ └── requirements.txt
├── frontend
│ ├── public
│ │ ├── index.html
│ │ └── firebase-messaging-sw.js
│ ├── src
│ │ ├── components
│ │ │ ├── FlightStatus.js
│ │ │ └── FlightStatus.css
│ │ ├── App.js
│ │ ├── firebase.js
│ │ └── index.js
│ ├── package.json
│ └── README.md
└── README.md


## Prerequisites
- React.js
- Node.js and npm
- Python 3 and pip
- Firebase account for handling notifications

## Installation

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```
3. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install the required dependencies:
    ```sh
    npm install
    ```

## Running the Application

### Backend
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Run the Flask application:
    ```sh
    python run.py
    ```
   The backend will be available at `http://localhost:5000`.

### Frontend
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Run the React application:
    ```sh
    npm start
    ```
   The frontend will be available at `http://localhost:3000`.

## Usage
1. Open the web application in your browser at `http://localhost:3000`.
2. Enter the airline name and flight number in the input fields and click "Search".
3. The flight status will be displayed below the input fields.

## API Endpoints

### GET /api/flights
Fetches flight status based on the provided airline name and flight number.

**Request Parameters:**
- `airline_name`: The name of the airline.
- `flight_number`: The flight number.

**Response:**
Returns a list of flight status information.

## Notifications

The application uses Firebase Cloud Messaging (FCM) to handle notifications. Here’s how it works:

1. **Frontend Integration:**
   - The `firebase.js` file contains the Firebase configuration and handles the setup for Firebase Cloud Messaging.
   - Notifications are requested when the application loads, and the service worker (`firebase-messaging-sw.js`) manages background notifications.

2. **Service Worker:**
   - The `firebase-messaging-sw.js` file is located in the `public` directory and is responsible for handling incoming messages while the app is in the background.

3. **Requesting Permissions:**
   - When the app loads, it requests permission from the user to show notifications. If granted, it will retrieve an FCM token and listen for incoming messages.

**Files Involved:**
- `frontend/src/firebase.js`: Firebase setup and token management.
- `frontend/public/firebase-messaging-sw.js`: Service worker script for handling notifications.

## Technologies Used
- **Frontend:**
  - React
  - Axios
  - Firebase

- **Backend:**
  - Python
  - Flask
  - PyMongo
  - Flask-CORS
  - flask_pymongo

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
