const wrapper = document.getElementById("slider");
const items = document.getElementById("container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let posX1 = 0;
let posX2 = 0;
let posInitial;
let posFinal;
const threshold = 100,
  slides = items.getElementsByClassName("slide"),
  slidesLength = slides.length,
  slideSize = items.getElementsByClassName("slide")[0].offsetWidth,
  firstSlide = slides[0],
  lastSlide = slides[slidesLength - 1],
  cloneFirst = firstSlide.cloneNode(true),
  cloneLast = lastSlide.cloneNode(true);
let index = 0;
let allowShift = true;

items.appendChild(cloneFirst);
items.insertBefore(cloneLast, firstSlide);
items.onmousedown = dragStart;
items.addEventListener("transitionend", checkIndex);

prev.addEventListener("click", function() {
  shiftSlide(-1);
});
next.addEventListener("click", function() {
  shiftSlide(1);
});

function dragStart(e) {
  e = e || window.event;
  e.preventDefault();
  posInitial = items.offsetLeft;

  if (e.type == "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragAction;
  }
}

function dragAction(e) {
  e = e || window.event;

  if (e.type == "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
  items.style.left = items.offsetLeft - posX2 + "px";
}

function dragEnd(e) {
  posFinal = items.offsetLeft;
  if (posFinal - posInitial < -threshold) {
    shiftSlide(1, "drag");
  } else if (posFinal - posInitial > threshold) {
    shiftSlide(-1, "drag");
  } else {
    items.style.left = posInitial + "px";
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

function shiftSlide(dir, action) {
  items.classList.add("move");

  if (allowShift) {
    if (!action) {
      posInitial = items.offsetLeft;
    }

    if (dir == 1) {
      items.style.left = posInitial - slideSize + "px";
      index++;
    } else if (dir == -1) {
      items.style.left = posInitial + slideSize + "px";
      index--;
    }
  }

  allowShift = false;
}

function checkIndex() {
  items.classList.remove("move");

  if (index == -1) {
    items.style.left = -(slidesLength * slideSize) + "px";
    index = slidesLength - 1;
  }

  if (index == slidesLength) {
    items.style.left = -(1 * slideSize) + "px";
    index = 0;
  }

  allowShift = true;
}
