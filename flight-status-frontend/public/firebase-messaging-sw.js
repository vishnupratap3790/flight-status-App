importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');


const firebaseConfig = {
  apiKey: "AIzaSyAhK8m-7_3DdQN0H1BVdGPmwB9IO5udRFw",
  authDomain: "flight-status-app-757b8.firebaseapp.com",
  projectId: "flight-status-app-757b8",
  storageBucket: "flight-status-app-757b8.appspot.com",
  messagingSenderId: "830077251635",
  appId: "1:830077251635:web:f5fc27b3b15c618e523346",
  measurementId: "G-L7G7GGXDGH"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
