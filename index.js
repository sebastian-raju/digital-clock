setInterval(function(){
  let time = document.querySelector('.displayClock');
  let timeNow = new Date().toLocaleTimeString();
  time.innerHTML = timeNow;
},1000);

let displayClock = document.querySelector('.displayClock');
let theme = document.querySelector('.theme');

theme.style.color = 'white';
theme.style.backgroundColor = 'black';
document.body.classList.add('light-bg-mode');


function themeChange(){
  if(theme.innerText === 'Dark'){
    theme.innerText = 'Light';
    theme.style.color = 'black';
    theme.style.backgroundColor = 'white';
    displayClock.classList.add('light-mode');
    document.body.classList.add('dark-bg-mode');
  }
  else{
    theme.innerText = 'Dark';
    theme.style.color = 'white';
    theme.style.backgroundColor = 'black';
    displayClock.classList.remove('light-mode');
    document.body.classList.remove('dark-bg-mode');
    document.body.classList.add('light-bg-mode');
  }
}

