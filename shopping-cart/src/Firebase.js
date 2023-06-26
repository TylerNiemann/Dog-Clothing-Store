// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXOBDnig1ibm_ukclEbax_ifSe64QR47o",
  authDomain: "web-store-6ff8b.firebaseapp.com",
  projectId: "web-store-6ff8b",
  storageBucket: "web-store-6ff8b.appspot.com",
  messagingSenderId: "2927275070",
  appId: "1:2927275070:web:9751a27ac4a9f66337f56f"
};

// Initialize Firebase
const initial = initializeApp(firebaseConfig);

const db = getFirestore(initial);
//connectFirestoreEmulator(db, 'localhost', 8080)


const cartsCollectionRef = collection(db, "carts");

getDocs(cartsCollectionRef)
  .then((snapshot) => {
    if (snapshot.empty) {
      const cartDocRef = doc(cartsCollectionRef);
      setDoc(cartDocRef, {});
    }
  })
  .catch((error) => {
    console.log("Error creating 'carts' collection:", error);
  });


export default initial;