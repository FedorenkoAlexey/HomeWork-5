let slideIndex = 1;

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");

prev.addEventListener("click", function() {
  plusSlides(-1);
});
next.addEventListener("click", function() {
  plusSlides(1);
});

dot1.addEventListener("click", function() {
  currentSlide(1);
});
dot2.addEventListener("click", function() {
  currentSlide(2);
});
dot3.addEventListener("click", function() {
  currentSlide(3);
});
dot4.addEventListener("click", function() {
  currentSlide(4);
});
dot5.addEventListener("click", function() {
  currentSlide(5);
});

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//-------------------------------------------
