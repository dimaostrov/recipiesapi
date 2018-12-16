import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAtvS1_hViiHCahFX0fZo5wYWaNT2vW5H8",
  authDomain: "recipes-cb772.firebaseapp.com",
  databaseURL: "https://recipes-cb772.firebaseio.com",
  projectId: "recipes-cb772",
  storageBucket: "recipes-cb772.appspot.com",
  messagingSenderId: "107152623651"
};

firebase.initializeApp(config);

export default firebase;

export const recipes = firebase.database().ref('recipes');