const sector = document.querySelector('.section');
const container = document.querySelector('.container')
const first = document.getElementById('first');
document.getElementById("title").innerHTML = "Sign up";

const space = document.createElement('br');
const space2 = document.createElement('br');
const space4 = document.createElement('br');
const space5 = document.createElement('br');
const line = document.createElement('hr');


// Create inputs (NOT divs)
const nickname = document.createElement('input');
nickname.type = 'text';
nickname.id = 'nick';
nickname.className = 'camp';
nickname.placeholder = 'Username...';

const email = document.createElement('input');
email.type = 'text';
email.id = 'email';
email.className = 'camp';
email.placeholder = 'Email...';

const password = document.createElement('input');
password.type = 'password';
password.id = 'pass';
password.className = 'camp';
password.placeholder = 'Password...';

const password2 = document.createElement('input');
password2.type = 'password';
password2.id = 'pass';
password2.className = 'camp';
password2.placeholder = 'Password...';

const signup = document.createElement('button');
signup.type = 'signup';
signup.id = 'signup';
signup.className = 'signupButton';
signup.textContent = "Sign up";
signup.type = "button";

const text = document.createElement('div');
text.id = 'text';
text.className = 'textLogup';
text.innerHTML = `Already have an account? <a href='../login/pageLogin.html' id='sign'>Sign in</a>`;

const space3 = document.createElement('div');
space3.id = 'space3';
space3.className = 'space3';


// Insert into sector before #first
sector.insertBefore(line, first); 
sector.insertBefore(space3, line); 
sector.insertBefore(text, space3); 
sector.insertBefore(signup, text); 
sector.insertBefore(space2, signup);
sector.insertBefore(password2, space2);
sector.insertBefore(space5, password2);
sector.insertBefore(password, space5);
sector.insertBefore(space, password);
sector.insertBefore(email, space);
sector.insertBefore(space4, email);
sector.insertBefore(nickname, space4); // nickname above password

// Optional: save username (DON'T save passwords in localStorage)
nickname.value = localStorage.getItem('nick') ?? '';
nickname.addEventListener('blur', () => {
  localStorage.setItem('nick', nickname.value);
});

email.value = localStorage.getItem('email') ?? '';
email.addEventListener('blur', () => {
  localStorage.setItem('email', email.value);
});






