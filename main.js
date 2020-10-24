// Selecting the elements 
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus'),
showAmPm = true;

//Show Time 
function showTime(){
let date = new Date();
let hour = date.getHours(),
min  = date.getMinutes(),
secs = date.getSeconds();

//Set Am or Pm 
const amPm = hour <= 12 ? 'AM' : 'PM';

// 12hr format 
hour = hour % 12 || 12;

//Output time 
time.innerHTML = `${hour} : ${addZero(min)}  ${showAmPm ? amPm : ''} ` //: ${addZero(secs)}

setTimeout(showTime, 1000);
}

//addZeros 
function addZero(time){
   return(parseInt(time,10) < 10 ? '0' : '') + time; // ,10 means base 10 just to confir it's a decimal number  
}


//Set Bakcground
function setBackground(){
   let time = new Date();
   let hour = time.getHours();
   if(hour < 12){
      document.body.style.backgroundImage = "url('img/morning.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      focus.style.textDecoration = "underline";
      greeting.innerHTML = "Good Morning,"
   }else if(hour < 18){
      document.body.style.backgroundImage = "url('img/noon.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      focus.style.textDecoration = "underline";
      greeting.innerHTML = "Good Afternoon,"

   }else{
      document.body.style.backgroundImage = "url('img/night.jpg')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.color = "white";
      focus.style.textDecoration = "underline";
      greeting.innerHTML = "Good Evening,";

   }
}

//Get name from localstorage 
function getName(){
   if(localStorage.getItem('name') === null){
      name.textContent = "Name";
   }else{
      name.textContent = localStorage.getItem('name')
   }
}

//Set name and store to local storage
function setName(e){
   if(e.type === 'keypress'){
      //enter key or not
      if(e.which == 13 || e.keyCode == 13){ //e.which is not supported by every one so e.keyCode
         if(e.target.innerText === '')
         e.target.innerText = 'Name';
         else
         localStorage.setItem('name',e.target.innerText);
         name.blur();
      }
   }else{
      if(e.target.innerText === '')
      e.target.innerText = 'Name';
      else
      localStorage.setItem('name',e.target.innerText) // blur doesnt need any checking caue it's default 
   }
}

//Get focus from localstorage 
function getFocus(){
   if(localStorage.getItem('focus') === null){
      focus.textContent = "Enter Focus";
   }else{
      focus.textContent = localStorage.getItem('focus')
   }
}

 //Set focus to local storage 
function setFocus(e){
   if(e.type === 'keypress'){
      
      if(e.which == 13 || e.keyCode == 13){  //e.which doesn't work on some browser so e.keycode 
         if(e.target.innerText === '')
         e.target.innerText = 'Enter Focus';
         else
         localStorage.setItem('focus',e.target.innerText);
         focus.blur();
      }
   }else{
      if(e.target.innerText === '')
      e.target.innerText = 'Enter Focus';
      else
      localStorage.setItem('focus',e.target.innerText)  
   }
}


name.addEventListener('keypress',setName,false);
name.addEventListener('blur',setName,false);
focus.addEventListener('keypress',setFocus,false);
focus.addEventListener('blur',setFocus,false);

showTime();
setBackground();
getName();
getFocus();
