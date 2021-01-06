import firebase from 'firebase/app';
import 'firebase/auth'; 

const auth = {

    user: () => { 
            return firebase.auth()?.currentUser;
          },
    login: async () => {

        const provider = new firebase.auth.GoogleAuthProvider();

        try {

        
        const result = await firebase.auth()
            .signInWithPopup(provider)
            
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential as firebase.auth.OAuthCredential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
        } catch(error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;
                // ...
            };
    },
    logout: () => {
        firebase.auth().signOut().then(() => {
            /** @type {firebase.auth.OAuthCredential} */
            
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // ...
        });
    }

}

export default {auth};