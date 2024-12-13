importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQyqFA6i6NG6AjWWRMgSbitbS1YuBkjZU",
    authDomain: "pwa-push-notification-te-6d338.firebaseapp.com",
    projectId: "pwa-push-notification-te-6d338",
    storageBucket: "pwa-push-notification-te-6d338.firebasestorage.app",
    messagingSenderId: "352305055996",
    appId: "1:352305055996:web:d99917e01420b5780a2f79"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const messaging = getMessaging(app)
  getToken(messaging, { vapidKey: 'BAaRfdsJAd4mARpA3pA2y3WueFwlzmbTWBexlVFrA-X4fuYqWjg_QkPLKMFBX6joAimghk1yAPQj-zK4f7-5llQ ' })
  .then((currentToken) => {
    if (currentToken) {
      requestPermission();
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  });

  export {messaging}