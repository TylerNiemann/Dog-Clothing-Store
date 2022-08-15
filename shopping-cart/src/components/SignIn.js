import React from "react";
import firebase from "../Firebase";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';

function SignIn(){
    async function signIn() {
        let provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    function signOutUser() {
        signOut(getAuth());
    }

    function initFirebaseAuth() {
        onAuthStateChanged(getAuth(), authStateObserver);
    }

    function getProfilePicUrl() {
        return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
    }

    function getUserName() {
        return getAuth().currentUser.displayName;
    }

    function isUserSignedIn() {
        return !!getAuth().currentUser;
    }

    function authStateObserver(user) {
        if (user) {
            
            return (
                    <div>
                        <img src={'url(' + addSizeToGoogleProfilePic(getProfilePicUrl) + ')'} alt="ProfilePic" ></img>
                    </div>
                )
        
            // Show user's profile and sign-out button.
            //userNameElement.removeAttribute('hidden');
            //userPicElement.removeAttribute('hidden');
            //signOutButtonElement.removeAttribute('hidden');
        
            // Hide sign-in button.
            //signInButtonElement.setAttribute('hidden', 'true');
        
        } 
        else {
            // User is signed out!szd
            // Hide user's profile and sign-out button.
            //userNameElement.setAttribute('hidden', 'true');
            //userPicElement.setAttribute('hidden', 'true');
            //signOutButtonElement.setAttribute('hidden', 'true');
        
            // Show sign-in button.
            //signInButtonElement.removeAttribute('hidden');
        }
    }

        function addSizeToGoogleProfilePic(url) {
        if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
            return url + '?sz=150';
        }
        return url;
        }
}

export default SignIn;