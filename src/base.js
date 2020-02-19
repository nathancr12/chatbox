import Rebase from 're-base'

// optimisation
import firebase from 'fireabse/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCCaQKUlUVLJOXgl7FzivXrvfhitOhl78k",
    authDomain: "chatbox-523dd.firebaseapp.com",
    databaseURL: "https://chatbox-523dd.firebaseio.com"
})

const base = Rebase.createClass(firebase.database)

export {firebaseApp}

export default base