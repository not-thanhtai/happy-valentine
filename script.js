"use strict";

const btn = document.querySelector(".btn--round");
const button = document.querySelector(".btn--next");
const container = document.querySelector(".container");
const loading = document.querySelector(".wrapper");
const background = document.querySelector("body");
const valentine = document.querySelector(".valentines");
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");
const front = document.querySelector(".front");
const imageContainer = document.querySelector(".image--card--container");
const card = document.querySelector(".card");
const letterText = document.querySelector(".text");
const image = document.querySelector(".image--container");

const letterContent = ["Nội dung 1", "Nội dung 2", "Nội dung 3"];

let currentIndex = 0;
let isTyping = false;
let typingTimeout;
let allLettersDisplayed = false;

const typeWritingEffect = (text, index = 0) => {
  if (index < text.length) {
    letterText.innerHTML = text.substring(0, index + 1);
    typingTimeout = setTimeout(() => {
      typeWritingEffect(text, index + 1);
    }, 10);
  } else {
    isTyping = false;
  }
};

const changeLetterContent = () => {
  clearTimeout(typingTimeout);
  const newText = letterContent[currentIndex];
  currentIndex = (currentIndex + 1) % letterContent.length;
  typeWritingEffect(newText);
  console.log(currentIndex, allLettersDisplayed);
  if (currentIndex === 1 && allLettersDisplayed) {
    container.classList.remove("visible");
    setTimeout(() => {
      image.classList.add("visible");
      container.remove();
    }, 1000);
  }
};

btn.addEventListener("click", function () {
  background.style.backgroundColor = "#ffebd8";
  this.style.setProperty("--primary", "255, 90, 120");
  this.style.setProperty("--secondary", "150, 50, 60");

  setTimeout(function () {
    btn.classList.add("hidden");
    setTimeout(() => {
      btn.remove();
    }, 500);
  }, 100);

  setTimeout(function () {
    loading.classList.add("visible");
  }, 1000);
  setTimeout(function () {
    loading.classList.remove("visible");
    setTimeout(() => {
      loading.remove();
    }, 500);
  }, 4500);
  setTimeout(function () {
    container.classList.add("visible");
  }, 5000);
});

envelope.addEventListener("click", () => {
  letter.classList.add("open");
  button.style.display = letter.classList.contains("open") ? "block" : "none";
});

button.addEventListener("click", () => {
  letterText.style.fontSize = "8px";
  changeLetterContent();
  if (currentIndex === 0 && !isTyping) {
    allLettersDisplayed = true;
  }
});
