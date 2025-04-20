function openAuthModal() {
    document.getElementById("authModal").style.display = "block";
    setTimeout(() => {
      document.querySelector(".modal-content").classList.add("show");
    }, 50);
  }
  
  function closeAuthModal() {
    const modal = document.getElementById("authModal");
    const content = document.querySelector(".modal-content");
    content.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
  
  function toggleAuthMode() {
    const title = document.getElementById("authTitle");
    const action = document.getElementById("authAction");
    const toggle = document.getElementById("toggleText");
    const emailInput = document.getElementById("authEmail");
    const loginInput = document.getElementById("regLogin");
    const content = document.querySelector(".modal-content");
  
    content.classList.remove("show");
    setTimeout(() => {
      if (title.innerText === "Авторизация") {
        title.innerText = "Регистрация";
        action.innerText = "Зарегистрироваться";
        toggle.innerText = "Уже есть аккаунт? Войти";
        emailInput.placeholder = "Почта";
        loginInput.style.display = "block";
      } else {
        title.innerText = "Авторизация";
        action.innerText = "Войти";
        toggle.innerText = "Нет аккаунта? Зарегистрироваться";
        emailInput.placeholder = "Почта или Логин";
        loginInput.style.display = "none";
      }
      content.classList.add("show");
    }, 200);
  }
  