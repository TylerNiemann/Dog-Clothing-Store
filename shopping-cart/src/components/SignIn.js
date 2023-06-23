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
        window.location.reload();
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
        else setLoginStatus('LoggedOut')        
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
                <div id="UserName">
                  <h4 style={{ color: 'White', fontWeight: "bold", fontSize:"25px" }} >{getAuth().currentUser.displayName.toUpperCase()}</h4>
                  <button className="Sign" onClick={signOutUser}>Sign Out</button>
                </div>  
            </div>
        )
    }
        

}


const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return currentUser;
  };

  export async function signIn() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }


export { SignIn, useAuth};