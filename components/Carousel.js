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
  const images = [
    './assets/carousel/mountains.jpeg',
		'./assets/carousel/computer.jpeg',
		'./assets/carousel/trees.jpeg',
		'./assets/carousel/turntable.jpeg',
  ];

  let index = 0;

  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const carouselImg = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.className = 'carousel';
  leftButton.className = 'left-button';
  rightButton.className = 'right-button';

  leftButton.textContent = '<';
  carouselImg.setAttribute('src', `${images[0]}`);
  rightButton.textContent = '>';

  entryPoint.appendChild(carousel);
  carousel.appendChild(leftButton);
  carousel.appendChild(carouselImg);
  carousel.appendChild(rightButton);

  leftButton.addEventListener('click', () => {
		if (index < images.length) {
			index++;
			carouselImg.setAttribute('src', `${images[index]}`);
    }
    console.log('left click!')
	});
  rightButton.addEventListener('click', () => {
		if (index > 0) {
			index--;
			carouselImg.setAttribute('src', `${images[index]}`);
    }
    console.log('right click!')
	});

  return carousel;
}

carouselMaker();