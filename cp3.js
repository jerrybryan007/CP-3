// Função para validar o campo de Primeiro Nome
function validateFirstName() {
    const firstNameInput = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');
  
    if (firstNameInput.value.length < 5) {
      firstNameError.textContent = 'O primeiro nome deve ter no mínimo 5 caracteres.';
      firstNameInput.classList.add('invalid');
    } else {
      firstNameError.textContent = '';
      firstNameInput.classList.remove('invalid');
    }
  }
  
  // Função para validar o campo de Segundo Nome
  function validateLastName() {
    const lastNameInput = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
  
    if (lastNameInput.value.length < 5) {
      lastNameError.textContent = 'O segundo nome deve ter no mínimo 5 caracteres.';
      lastNameInput.classList.add('invalid');
    } else {
      lastNameError.textContent = '';
      lastNameInput.classList.remove('invalid');
    }
  }
  
  // Função para validar o campo de Email
  function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value;
  
    if (emailValue.length < 5 || !emailValue.includes('@')) {
      emailError.textContent = 'O email deve ter no mínimo 5 caracteres e conter o símbolo "@"';
      emailInput.classList.add('invalid');
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('invalid');
    }
  }
  
  // Função para validar o campo de Senha
  function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
  
    if (passwordInput.value.length < 6 || passwordInput.value.length > 8) {
      passwordError.textContent = 'A senha deve ter entre 6 e 8 caracteres.';
      passwordInput.classList.add('invalid');
    } else {
      passwordError.textContent = '';
      passwordInput.classList.remove('invalid');
    }
  }
  
  // Função para validar a Confirmação de Senha
  function validateConfirmPassword() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const passwordInput = document.getElementById('password');
  
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = 'A confirmação de senha não corresponde à senha digitada.';
      confirmPasswordInput.classList.add('invalid');
    } else {
      confirmPasswordError.textContent = '';
      confirmPasswordInput.classList.remove('invalid');
    }
  }
  
  // Adiciona os event listeners para validar os campos durante a digitação
  document.getElementById('firstName').addEventListener('input', validateFirstName);
  document.getElementById('lastName').addEventListener('input', validateLastName);
  document.getElementById('email').addEventListener('input', validateEmail);
  document.getElementById('password').addEventListener('input', validatePassword);
  document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
  
  // Event listener para validar o formulário no momento do submit
  document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  });
 
  document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  

  