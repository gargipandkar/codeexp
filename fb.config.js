import Firebase from 'firebase'

let config = {
    apiKey: 'AIzaSyCw3L0E-iujZVQpKhjGoPIPnH5bkrTBc9A',
    authDomain: 'hackathon-4d07b.firebaseio.com',
    databaseURL: 'hackathon-4d07b.firebaseio.com',
    projectId: 'hackathon-4d07b',
    storageBucket: 'hackathon-4d07b.appspot.com',
    messagingSenderId: 'XXXXXXX'
  };

let app = Firebase.initializeApp(config);
export const db = app.database();