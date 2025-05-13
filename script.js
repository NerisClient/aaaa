
const firebaseConfig = {
  apiKey: "AIzaSyDKCq9bNS2oMF8_AW8gVaJDLsJ4I-9fzLY",
  authDomain: "baza-b75f2.firebaseapp.com",
  projectId: "baza-b75f2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

async function register() {
  const login = document.getElementById("login").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  try {
    const userCred = await auth.createUserWithEmailAndPassword(email, password);
    await db.collection("users").doc(userCred.user.uid).set({
      login: login,
      email: email
    });
    msg.textContent = "Регистрация успешна!";
  } catch (e) {
    msg.textContent = "Ошибка: " + e.message;
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  try {
    await auth.signInWithEmailAndPassword(email, password);
    msg.textContent = "Успешный вход!";
  } catch (e) {
    msg.textContent = "Ошибка: " + e.message;
  }
}
