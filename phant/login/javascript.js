const section = document.querySelector('.section');
const container = document.querySelector('.container')
const first = document.getElementById('first');
document.getElementById("title").innerHTML = "Login";

const space = document.createElement('br');
const space2 = document.createElement('br');
const line = document.createElement('hr');


// Create inputs (NOT divs)
const nickname = document.createElement('input');
nickname.type = 'text';
nickname.id = 'nick';
nickname.className = 'camp';
nickname.placeholder = 'Username...';

const password = document.createElement('input');
password.type = 'password';
password.id = 'pass';
password.className = 'camp';
password.placeholder = 'Password...';

const login = document.createElement('button');
login.type = 'login';
login.id = 'login';
login.className = 'loginButton';
login.textContent = "Login";
login.type = "button";

const text = document.createElement('div');
text.type = 'text';
text.id = 'text';
text.className = 'textUnder';
text.innerHTML = `Don't have an account? <a href='../signup/pageSignup.html' id='signup'>Sign up</a>`;

const space3 = document.createElement('div');
space3.id = 'space3';
space3.className = 'space3';


// Insert into section before #first
section.insertBefore(line, first); 
section.insertBefore(space3, line); 
section.insertBefore(text, space3); 
section.insertBefore(login, text); 
section.insertBefore(space2, login);
section.insertBefore(password, space2);
section.insertBefore(space, password);
section.insertBefore(nickname, space); // nickname above password

// Optional: save username (DON'T save passwords in localStorage)
nickname.value = localStorage.getItem('nick') ?? '';
nickname.addEventListener('blur', () => {
  localStorage.setItem('nick', nickname.value);
});



