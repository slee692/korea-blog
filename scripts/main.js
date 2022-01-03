//image switcher code
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySRC = myImage.getAttribute('src');
    if (mySRC === 'images/mooncake.jpg') {
        myImage.setAttribute('src', 'images/flower-balloon.jpg');
    } else {
        myImage.setAttribute('src', 'images/mooncake.jpg');
    }
}

//personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Korea, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Korea, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
}