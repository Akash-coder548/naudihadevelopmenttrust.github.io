const firebaseConfig = {
  apiKey: "AIzaSyB_G9TzEQtjRz-g_MYOg9o0A_efQ0zYGQg",
  authDomain: "naudiha-trust.firebaseapp.com",
  projectId: "naudiha-trust",
  appId: "1:946992636290:web:4a16a47051c0fbe4c6ef9b"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup(){
  auth.createUserWithEmailAndPassword(email.value,password.value)
  .then(()=>location.href="index.html")
  .catch(e=>msg.innerText=e.message);
}

function login(){
  auth.signInWithEmailAndPassword(email.value,password.value)
  .then(()=>location.href="index.html")
  .catch(e=>msg.innerText=e.message);
}

function googleLogin(){
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(()=>location.href="index.html");
}
