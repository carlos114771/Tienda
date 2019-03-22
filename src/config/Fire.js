import firebase from 'firebase';

  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDs8X4GGMdWstyHaORQd-yNx87ZOpzKHVA",
    authDomain: "tienda-dee62.firebaseapp.com",
    databaseURL: "https://tienda-dee62.firebaseio.com",
    projectId: "tienda-dee62",
    storageBucket: "tienda-dee62.appspot.com",
    messagingSenderId: "400455709903"
  };
  const fire= firebase.initializeApp(config);
export default fire;