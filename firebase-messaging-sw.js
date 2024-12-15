importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');


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
  const app = firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging(app);

  messaging.onMessage(function(payload) {
    console.log('Received background message: ', payload);
  
    // Customize the notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
      click_action: payload.notification.click_action // Can open a URL or trigger an action
    };
  
    // Show the notification
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message: ', payload);
  
    // Customize the notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
      click_action: payload.notification.click_action // Can open a URL or trigger an action
    };
  
    // Show the notification
    self.registration.showNotification(notificationTitle, notificationOptions);
  });