import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDH48qwQreySJpIZm01PZvbv9D8q98lZhs",
    authDomain: "vue-auth-756ab.firebaseapp.com",
    projectId: "vue-auth-756ab",
    storageBucket: "vue-auth-756ab.appspot.com",
    messagingSenderId: "895864719601",
    appId: "1:895864719601:web:44a430af334cb050afc150"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
