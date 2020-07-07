import firebase from 'firebase/app'
import '@firebase/storage'

const firebaseConfig = {
    apiKey: "AAIzaSyCXvnquCx_U19-j7J0vHQo_a9Q6_Q-nizA",
    authDomain: "polaroll.firebaseapp.com",
    databaseURL: "https://polaroll.firebaseio.com",
    projectId: "polaroll",
    storageBucket: "polaroll.appspot.com",
    appId: "1:293088880664:ios:08b3a05da2f812698cfb6d"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export {
    storage, firebase as default 
}
