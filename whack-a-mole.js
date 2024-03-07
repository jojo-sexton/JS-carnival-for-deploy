// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//Objective: add some functionality to our page that will randomly select one of these table cells, and then add the image of a mole inside of it. At the end of this challenge, clicking on that mole will then make it choose a new spot to appear in.

//create an array and fill it with cells
let cells = document.getElementsByTagName('td')

//Write a function that randomly create a moll
//random cell selector

function createRandomMole() {
  let randomIndex = Math.floor(Math.random() * 25)
  let randomCell = cells[randomIndex]

  //show the mole: write a function that puts the mole into that cell
  //create an image tag in the HTML
  const mole = document.createElement('img')
  mole.src = 'mole.PNG'
  mole.id = 'mole'

  //add the mole image to HTML with apendChild method
  randomCell.appendChild(mole)
}

createRandomMole()

//Whack that mole! remove the mole from the current cell and add the the mole to a new random cell
function whackThatMole(e) {
  //add sound
  let beepsound = new Audio('whack-audio.wav')
  beepsound.play()

  //create a variable for the mole being clicked
  let moleOnClick = e.target

  //remove current mole
  const element = document.getElementById('mole')
  element.remove()

  //add new mole
  createRandomMole()
}

//Binding whack that mole to all cells
for (i = 0; i < cells.length; i++) {
  cells[i].onclick = whackThatMole
}
