import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDwShPZ-AH_VkI89wU8T7xPQvDYfXHXQsQ',
  authDomain: 'finance-manager-c8ff6.firebaseapp.com',
  projectId: 'finance-manager-c8ff6',
  storageBucket: 'finance-manager-c8ff6.appspot.com',
  messagingSenderId: '77974123425',
  appId: '1:77974123425:web:93c1bf6d27edd95cea51e0',
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize firestore
const projectFireStore = firebase.firestore();

//export firestore service
export { projectFireStore };
