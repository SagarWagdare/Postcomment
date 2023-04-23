import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBeMxLY8sLWvFCSLlEXuiBinwRxSTP4aPo",
    authDomain: "inputinsight-7e57e.firebaseapp.com",
    databaseURL: "https://inputinsight-7e57e-default-rtdb.firebaseio.com",
    projectId: "inputinsight-7e57e",
    storageBucket: "inputinsight-7e57e.appspot.com",
    messagingSenderId: "429922688713",
    appId: "1:429922688713:web:f0c0017aa86e15ddf63718"
};

firebase.initializeApp(firebaseConfig)
export const dataRef = firebase.database();
export default firebase