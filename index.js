"use strict";
const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
let currentSlid = 0;
const maxSlide = images.length;
images.forEach((ele, i) => {
  ele.style.transform = `translateX(${100 * i}%)`;
});

rightBtn.addEventListener("click", () => {
  if (currentSlid === maxSlide - 1) currentSlid = 0;
  else currentSlid++;
  images.forEach((ele, i) => {
    ele.style.transform = `translateX(${100 * (i - currentSlid)}%)`;
  });
});

leftBtn.addEventListener("click", () => {
  if (currentSlid === 0) currentSlid = maxSlide - 1;
  else currentSlid--;
  images.forEach((ele, i) => {
    ele.style.transform = `translateX(${100 * (i - currentSlid)}%)`;
  });
});
