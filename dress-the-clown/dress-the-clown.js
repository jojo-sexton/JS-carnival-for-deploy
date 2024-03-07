// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// FUNCTION CHANGEPARTS
////Write a function name changeParts that when we hit the up and down arrow keys, it will move between different parts of the clown (keyCode = 38 is up and 40 is down)
function changeParts(keyCode) {
  //create an array of all images in HTLM
  let images = document.getElementsByTagName('img')

  //create an array of all parts ["head":0, "body":1, "shoes":2] from the imageTags array
  let parts = []
  for (i = 0; i < images.length; i++) {
    parts.push(images[i].id)
  }
  console.log(parts)

  let currentChoice = document.getElementById('choice').innerHTML
  let currentIndex = parts.indexOf(currentChoice)
  console.log(currentIndex)

  if (keyCode === 38) {
    if (currentIndex < parts.length - 1) {
      let newIndex = currentIndex + 1
      let newChoice = parts[newIndex]
      document.getElementById('choice').innerHTML = newChoice
    } else if ((currentIndex = parts.length)) {
      document.getElementById('choice').innerHTML = parts[0]
    }
  } else if (keyCode === 40) {
    if (currentIndex > 0) {
      let newIndex = currentIndex - 1
      let newChoice = parts[newIndex]
      document.getElementById('choice').innerHTML = newChoice
    } else document.getElementById('choice').innerHTML = parts[2]
  }
}

// FUNCTION CHANGECLOTHES
//Write a function changeClothes that when we hit the left and right arrow keys, the function will cycle between different clothing options such as head, body and feet
function changeClothes(keyCode) {
  //Based on the part that is chosen  (head, shoes, body) on  HTML i.e "your choice of change is head", head is the chosen part.  We need to get what part user whan to change.
  //lets create a variable for the chosen part
  let chosenPart = document.getElementById('choice').innerHTML

  //create a variable of the part's img div.
  let part = document.getElementById(chosenPart)

  //create a variable for the source of the image of the current part (./images/head3.png)
  //use getAttribute to get the relative src without the full url
  let currentImage = part.getAttribute('src')

  //create a variable that stores the  number of the current head image (i.e 0, 1, 2, 3, 4, 5)
  //use string.at() to get the number from currentPartImage
  // parseInt to convert currentHeadIndex from string to integer
  let currentIndex = parseInt(currentImage.at(-5))
  console.log(currentIndex)

  //change clothes with left arrow (keyCode = 37) or right arrow (keyCode =39)
  if (keyCode === 37) {
    if (currentIndex > 0) {
      let newIndex = currentIndex - 1
      let newImage = './images/' + chosenPart + newIndex + '.png'
      part.src = newImage
    } else part.src = './images/' + chosenPart + `5.png`
  } else if (keyCode === 39) {
    if (currentIndex < 4) {
      let newIndex = currentIndex + 1
      let newImage = './images/' + chosenPart + newIndex + '.png'
      part.src = newImage
    } else part.src = './images/' + chosenPart + '0.png'
  }
}
//Binding
window.addEventListener('keydown', (event) => {
  let keyCode = event.keyCode
  console.log(keyCode)
  changeParts(keyCode)
  changeClothes(keyCode)
})

// function changeClownHead(keyCode) {
//   //create the head variable
//   let head = document.getElementById('head')
//   // head.src = './images/head5.png'

//   //create a variable for the source of the image of the current head (./images/head3.png)
//   //use getAttribute to get the relative src without the full url
//   let currentHeadImage = head.getAttribute('src')

//   //create a variable that stores the  number of the current head image (i.e 0, 1, 2, 3, 4, 5)
//   // parseInt to convert currentHeadIndex from string to integer
//   let currentHeadIndex = parseInt(currentHeadImage.charAt(13))

//   //change head with left arrow (keyCode = 37) or right arrow (keyCode =39)
//   if ((keyCode = 37)) {
//     if (currentHeadIndex > 0) {
//       let newHeadIndex = currentHeadIndex - 1
//       let newHeadImage = './images/head' + newHeadIndex + '.png'
//       head.src = newHeadImage
//     } else head.src = './images/head5.png'
//   } else if ((keyCode = 39)) {
//     if ((currentHeadIndex = 5)) {
//       head.src = './images/head0.png'
//     } else {
//       let newHeadIndex = currentHeadIndex + 1
//       let newHeadImage = './images/head' + newHeadIndex + '.png'
//       head.src = newHeadImage
//     }
//   }
// }
