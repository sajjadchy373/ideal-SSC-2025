// nav bar sec

function openNav(){
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeNav(){
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

let slides = document.querySelectorAll(".slide");
let index = 0;

setTimeout(function(){
  setInterval(function(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}, 1000); // 1 second delay


let userName = sessionStorage.getItem("userName");

if (!userName) {
  userName = prompt("দয়া করে আপনার নাম লিখুন:");
  if (userName && userName.trim() !== "") {
    sessionStorage.setItem("userName", userName);
  } else {
    userName = "Brother";
  }
}
let useName =userName.toUpperCase();
let text = "Assalamu Alaikum<br>How are you, " + useName + "?<br> You are Welcome to IDEAL SSC-2025 web site";
let i = 0;
let speed = 80;
let greet = document.getElementById("greet");

function typeWriter() {
  // যদি <br> পাওয়া যায়
  if (text.substr(i, 4) === "<br>") {
    greet.innerHTML += "<br>";
    i += 4;
  } 
  // নরমাল অক্ষর
  else if (i < text.length) {
    greet.innerHTML += text.charAt(i);
    i++;
  } 
  else {
    return;
  }

  setTimeout(typeWriter, speed);
}

typeWriter();


