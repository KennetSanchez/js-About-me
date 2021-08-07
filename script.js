function github() {
  window.open("https://github.com/KennetSanchez");
}

function linkedin() {
  window.open(
    "https://www.linkedin.com/in/kennet-santiago-sánchez-roldán-2a7191216/"
  );
}

function sendMail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=1006229463@u.icesi.edu.co"
  );
}

function whoIAm() {
  let element = document.getElementById("personalData");
  element.scrollIntoView({ behavior: "smooth" });
  if (element.classList.value == "container") {
    addClass(element);
  } else {
    removeClass(element);
    whoIAm();
  }
}

function studies() {
  let element = document.getElementById("studies");
  element.scrollIntoView({ behavior: "smooth" });
  if (element.classList.value == "container") {
    addClass(element);
  } else {
    removeClass(element);
    studies();
  }
}

function extraCourses() {
  let element = document.getElementById("courses");
  element.scrollIntoView({ behavior: "smooth" });
  if (element.classList.value == "container") {
    addClass(element);
  } else {
    removeClass(element);
    extraCourses();
  }
}

function portfolio() {
  let element = document.getElementById("portfolio");
  element.scrollIntoView({ behavior: "smooth" });
  if (element.classList.value == "container") {
    addClass(element);
    animateImages();
  } else {
    removeClass(element);
    unanimateImages();
    portfolio();
  }
}

function socialMedia() {
  let element = document.getElementById("socialMedia");
  element.scrollIntoView({ behavior: "smooth" });
  if (element.classList.value == "container") {
    addClass(element);
  } else {
    removeClass(element);
    portfolio();
  }
}

function addClass(element) {
  element.classList.add("animate__animated");
  element.classList.add("animate__pulse");
}
function removeClass(element) {
  element.classList.remove("animate__animated");
  element.classList.remove("animate__pulse");
}

function animateImages() {
  let element = document.getElementsByClassName("image-right");
  for (let i = 0; i < element.length; i++) {
    element[0].classList.add("animate__animated");
    element[0].classList.add("animate__fadeInTopLeft");
  }

  element = document.getElementsByClassName("image-left");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.add("animate__animated");
    element[i].classList.add("animate__fadeInTopRight");
  }
}

function unanimateImages() {
  let element = document.getElementsByClassName("image-right");
  for (let i = 0; i < element.length; i++) {
    element[0].classList.remove("animate__animated");
    element[0].classList.remove("animate__fadeInTopLeft");
  }

  element = document.getElementsByClassName("image-left");
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove("animate__animated");
    element[i].classList.remove("animate__fadeInTopRight");
  }
}

function animateGit() {
  let element = document.getElementById("gitIcon");
  element.classList.add("animate__animated");
  element.classList.add("animate__zoomIn");
}

function unanimateGit() {
  let element = document.getElementById("gitIcon");
  element.classList.remove("animate__animated");
  element.classList.remove("animate__zoomIn");
}

function animateLinkedIn() {
  let element = document.getElementById("linkedInIcon");
  element.classList.add("animate__animated");
  element.classList.add("animate__zoomIn");
}

function unanimateLinkedIn() {
  let element = document.getElementById("linkedInIcon");
  element.classList.remove("animate__animated");
  element.classList.remove("animate__zoomIn");
}

function animateMail() {
  let element = document.getElementById("mailIcon");
  element.classList.add("animate__animated");
  element.classList.add("animate__zoomIn");
}

function unanimateMail() {
  let element = document.getElementById("mailIcon");
  element.classList.remove("animate__animated");
  element.classList.remove("animate__zoomIn");
}
