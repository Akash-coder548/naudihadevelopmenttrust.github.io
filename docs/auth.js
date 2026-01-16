const firebaseConfig = {
  apiKey: "AIzaSyB_G9TzEQtjRz-g_MYOg9o0A_efQ0zYGQg",
  authDomain: "naudiha-trust.firebaseapp.com",
  projectId: "naudiha-trust",
  appId: "1:946992636290:web:4a16a47051c0fbe4c6ef9b"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(()=>location.href="index.html")
    .catch(err=>document.getElementById("msg").innerText=err.message);
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(()=>location.href="index.html")
    .catch(err=>document.getElementById("msg").innerText=err.message);
}

function logout(){
  auth.signOut().then(()=>location.href="login.html");
}
