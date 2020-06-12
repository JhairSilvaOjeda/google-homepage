/*
Everything in between is a comment.
*/

// This is a comment
/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imgs/enterizo-esteril-celeste-mujer.jpeg') 
    { myImage.setAttribute ('src','imgs/enterizo-esteril-negro-mujer.jpeg'); }
    else if(mySrc === 'imgs/enterizo-esteril-negro-mujer.jpeg') 
    { myImage.setAttribute ('src','imgs/enterizo-esteril-blanco-mujer.jpeg'); }
    
    else 
    { myImage.setAttribute ('src','imgs/enterizo-esteril-celeste-mujer.jpeg'); }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName)
    { setUserName(); }
    else
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }




  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }