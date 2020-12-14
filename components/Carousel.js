/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const entryPoint = document.querySelector('div.carousel-container');

function carouselMaker(){

  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const carouselImgMountains = document.createElement('img');
  const carouselImgComputer = document.createElement('img');
  const carouselImgTrees = document.createElement('img');
  const carouselImgTurntable = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.className = 'carousel';
  leftButton.className = 'left-button';
  rightButton.className= 'right-button';

  leftButton.textContent = '<';
  carouselImgMountains.setAttribute('src', './assets/carousel/mountains.jpeg');
  carouselImgComputer.setAttribute('src', './assets/carousel/computer.jpeg');
  carouselImgTrees.setAttribute('src', './assets/carousel/trees.jpeg');
  carouselImgTurntable.setAttribute('src', './assets/carousel/turntable.jpeg');
  rightButton.textContent = '>';

  entryPoint.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(carouselImgMountains);
  carousel.appendChild(carouselImgComputer);
  carousel.appendChild(carouselImgTrees);
  carousel.appendChild(carouselImgTurntable);
  carousel.appendChild(rightButton);

  let images = [carouselImgMountains, carouselImgComputer, carouselImgTrees,
  carouselImgTurntable];
  let index = 0;
  let currentImg = images[index];
  currentImg.style.display = 'block';

  leftButton.addEventListener('click', (e) => {
    currentImg.style.display = 'none';
    let imgBack = index - 1;
    if (imgBack < 0){
      imgBack = 3;
      index = 3;
    }
    index = imgBack;
    currentImg = images[imgBack];
    currentImg.style.display = 'block';
  });

  rightButton.addEventListener('click', (e) => {
    currentImg.style.display = 'none';
    let imgForward = index + 1;
    if (imgForward > 3){
      imgForward = 0;
      index = 0;
    }
    index = imgForward;
    currentImg = images[imgForward];
    currentImg.style.display = 'block';
  });

  return carousel;
}

carouselMaker();
