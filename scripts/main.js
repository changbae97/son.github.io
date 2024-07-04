// Image switcher code
let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
	if(mySrc === "images/test.jfif"){
		myImage.setAttribute("src", "images/test1.jfif");
	}
	else{
		myImage.setAttribute("src", "images/test.jfif");
	}
}

// Personalized welcome message code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Hello, " + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello, " + storedName;
}

myButton.onclick = function(){
    setUserName();
}
