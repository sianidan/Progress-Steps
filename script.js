const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// function to update progress
function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active');
    }else {
      circle.classList.remove('active');
    }
  });

  // make progress bar width increment 33%
  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  // enable previous btn past first circle, disable next btn on last circle
  if (currentActive === 1) {
    previous.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}

// button event handler functions
function nextClick() {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  };
  update();
};

function previousClick() {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  };
  update();
};

// button event listeners
next.addEventListener('click', nextClick);
previous.addEventListener('click', previousClick);