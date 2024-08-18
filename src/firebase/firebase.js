// src/firebase/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

// Example function to fetch requests
export const fetchRequests = async () => {
  const snapshot = await firestore.collection('requests').get();
  const requests = snapshot.docs.map(doc => doc.data());
  return requests;
};

export default firebase;
