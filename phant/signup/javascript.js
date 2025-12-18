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
text.id = 'space3';
text.className = 'space3';



// Style (best: via CSS class, but this works)
nickname.style.cssText = 'background-color: #D9D9D9; border:1px solid #D9D9D9;border-radius:12px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;';
email.style.cssText = 'background-color: #D9D9D9; border:1px solid #D9D9D9;border-radius:12px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;';
password.style.cssText = 'background-color: #D9D9D9; border:1px solid #D9D9D9;border-radius:12px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;';
password2.style.cssText = 'background-color: #D9D9D9; border:1px solid #D9D9D9;border-radius:12px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;';
signup.style.cssText = 'background: linear-gradient(to right, #90fafe9c 10%, #9a2fff94 100%);border: 1px solid linear-gradient(to right, #90fafe9c 10%, #9a2fff94 100%); text-align: center; colour: #00000095; border-radius: 9999px;width:270px;height:44px;margin:12px auto;display:block;padding:0 16px;box-sizing:border-box;box-shadow: 1px 2px 5px #00000047;'
signup.style.border = "none";
signup.style.outline = "none";
text.style.cssText = 'colour: #00000094; font-family: sans-serif; text-align: center; margin-top: min(5vw, 4px); font-size: 10pt;'
space3.style.cssText = 'height: 10px;'

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

document.querySelector(".button").
                onclick = function () {
                    if(password.value = password2.value){

                    }
                }



