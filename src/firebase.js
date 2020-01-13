import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAxBGzKOHNK-HcFGmb289veKwTlmXMVWrk",
    authDomain: "codebox-3e605.firebaseapp.com",
    databaseURL: "https://codebox-3e605.firebaseio.com",
    projectId: "codebox-3e605",
    storageBucket: "codebox-3e605.appspot.com",
    messagingSenderId: "543805981946",
    appId: "1:543805981946:web:cdc6b490c6730f6dc33543"
};

firebase.initializeApp(config);

export default firebase;