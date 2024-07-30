import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAhK8m-7_3DdQN0H1BVdGPmwB9IO5udRFw",
  authDomain: "flight-status-app-757b8.firebaseapp.com",
  projectId: "flight-status-app-757b8",
  storageBucket: "flight-status-app-757b8.appspot.com",
  messagingSenderId: "830077251635",
  appId: "1:830077251635:web:f5fc27b3b15c618e523346",
  measurementId: "G-L7G7GGXDGH"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    await navigator.serviceWorker.register('/firebase-messaging-sw.js');
    const currentToken = await getToken(messaging, { vapidKey: 'BADo8oOGkZE10YS94e1Xin3XK5Jf_52_rdBjOKg5kUy21GZeohZrnTE9jyevQ8NCvRzYD6ryA6jBlO-xP2U6mRI' });
    console.log(messaging)
    if (currentToken) {
      console.log('current token for client: ', currentToken);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (err) {
    if (err.code === 'messaging/permission-blocked') {
      alert('Please enable notifications in your browser settings to receive updates.');
    }
    console.log('An error occurred while retrieving token. ', err);
  }
};

export const onMessageListener = () => 
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
