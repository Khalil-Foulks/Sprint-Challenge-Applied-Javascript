/* If You've gotten this far, you're on your own! Although we will give you some hints:
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

const carouselContainer = document.querySelector('.carousel-container')
const carouselArray = ['./assets/carousel/mountains.jpeg','./assets/carousel/computer.jpeg','./assets/carousel/trees.jpeg','./assets/carousel/turntable.jpeg']

function carouselMaker(){
  const carouselDiv = document.createElement('div')
  const image1 = document.createElement('img')
  const image2 = document.createElement('img')
  const image3 = document.createElement('img')
  const image4 = document.createElement('img')
  const buttonRight = document.createElement('div')
  const buttonLeft = document.createElement('div')

  carouselDiv.appendChild(buttonLeft)
  carouselDiv.appendChild(carouselArray[0])
  carouselDiv.appendChild(carouselArray[1])
  carouselDiv.appendChild(carouselArray[2])
  carouselDiv.appendChild(carouselArray[3])
  carouselDiv.appendChild(buttonRight)

  carouselDiv.classList.add('carousel')
  buttonLeft.classList.add('left-button')
  buttonRight.classList.add('right-button')


  function mouseClickLeft(event){

  }
  buttonLeft.addEventListener('click', mouseClickLeft)

  
  function mouseClickRight(event){

  }
  buttonRight.addEventListener('click', mouseClickRight)

  return carouselDiv
}

carouselContainer.appendChild(carouselMaker())
