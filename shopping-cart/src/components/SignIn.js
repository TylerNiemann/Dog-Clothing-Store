import React, {useState,useEffect} from "react";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
import initial from "../Firebase";
import "../styles/navbar.css"  


function SignIn(){

    const [loginStatus, setLoginStatus] = useState('LoggedOut')

    useEffect(()=>{
        initFirebaseAuth();
    });

    async function signIn() {
        let provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
    }

    function signOutUser() {
        signOut(getAuth());
        setLoginStatus('LoggedOut')
    }

    function isUserSignedIn() {
        return !!getAuth().currentUser;
    }

    function initFirebaseAuth() {
        onAuthStateChanged(getAuth(), SignInDisplay);
   }

    function SignInDisplay(user) {
        if (user) {
            
            setLoginStatus('LoggedIn')
        
            // Show user's profile and sign-out button.
            //userNameElement.removeAttribute('hidden');
            //userPicElement.removeAttribute('hidden');
            //signOutButtonElement.removeAttribute('hidden');
        
            // Hide sign-in button.
            //signInButtonElement.setAttribute('hidden', 'true');
        
        }        
            // User is signed out!szd
            // Hide user's profile and sign-out button.
            //userNameElement.setAttribute('hidden', 'true');
            //userPicElement.setAttribute('hidden', 'true');
            //signOutButtonElement.setAttribute('hidden', 'true');
    }

     if (loginStatus === 'LoggedOut') {
         return(
            <div className="SignInBlock">
                <button id="In" className="Sign" onClick={signIn} >Sign In</button>
            </div>
         )
    }
    else if(loginStatus === 'LoggedIn'){
        return(
             <div className="SignInBlock" >
                <img id="ProfilePic" src={getAuth().currentUser.photoURL || '/images/profile_placeholder.png'} alt="ProfilePic" ></img>
                <div id="UserName">
                  <h4>{getAuth().currentUser.displayName}</h4>
                  <button className="Sign" onClick={signOutUser}>Sign Out</button>
                </div>  
            </div>
        )
    }
        

}

export default SignIn;