import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBrTezQ3VRIzSfRORiQ0zPto_X97lNW82c",
    authDomain: "among-us10.firebaseapp.com",
    databaseURL: "https://among-us10.firebaseio.com",
    projectId: "among-us10",
    storageBucket: "among-us10.appspot.com",
    messagingSenderId: "400173790549",
    appId: "1:400173790549:web:8590c27a33adaf42932bdc",
    measurementId: "G-R2MQRBFEZX"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
