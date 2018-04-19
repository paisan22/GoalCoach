import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCXcCZnDvpFH4WyeckH9CZLfCguv90FnK0",
    authDomain: "goalcoach-ba5a9.firebaseapp.com",
    databaseURL: "https://goalcoach-ba5a9.firebaseio.com",
    projectId: "goalcoach-ba5a9",
    storageBucket: "",
    messagingSenderId: "646601750222"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');