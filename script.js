// Глобальная область видимости
window.onload = function() {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY", //  <-------------------  ВСТАВЬТЕ СВОЙ API KEY !!!
    authDomain: "YOUR_AUTH_DOMAIN", //  <-------------------  ВСТАВЬТЕ СВОЙ AUTH DOMAIN !!!
    projectId: "YOUR_PROJECT_ID",    //  <-------------------  ВСТАВЬТЕ СВОЙ PROJECT ID !!!
    // Добавьте это, если используете хостинг Firebase
    // appCheckDebugToken: true,
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Get DOM elements
  const registerButton = document.getElementById('register-button');
  const loginButton = document.getElementById('login-button');
  const messageElement = document.getElementById('message');

  // Register function
  async function register() {
    const login = document.getElementById("login").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await db.collection("users").doc(user.uid).set({
        login: login,
        email: email,
      });
      messageElement.textContent = "Регистрация успешна!";
    } catch (error) {
      console.error("Error registering user:", error);
      messageElement.textContent = "Ошибка регистрации: " + error.message;
    }
  }

  // Login function
  async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      messageElement.textContent = "Вход выполнен!";
    } catch (error) {
      console.error("Error logging in:", error);
      messageElement.textContent = "Ошибка входа: " + error.message;
    }
  }

  // Event listeners for buttons
  registerButton.addEventListener('click', register);
  loginButton.addEventListener('click', login);
};
