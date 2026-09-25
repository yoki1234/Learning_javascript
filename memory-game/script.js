const fruit = [
  "apple",
  "pineapple",
  "kiwi",
  "lime",
  "banana",
  "fig",
  "mango",
  "watermelon"
];

const fruitURL = {
  "apple": "../assets/apple.jpg",
  "pineapple": "../assets/pineapple.webp",
  "kiwi": "../assets/kiwi.webp",
  "lime": "../assets/lime.webp",
  "banana": "../assets/banana.jpg",
  "fig": "../assets/fig.webp",
  "mango": "../assets/mango.jpg",
  "watermelon": "../assets/watermeloen.jpg"
};

const imgContainer = document.getElementById("imgContainer");
const typingAns = document.getElementById("typingAns");
const ansContainer = document.getElementById("ansContainer");


// Answers typed by the user
const ansList = [];

typingAns.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    const answer = typingAns.value.toLowerCase().trim();

    // Only allow letters
    const isOnlyLetters = /^[a-zA-Z]+$/.test(answer);

    if (isOnlyLetters) {

      ansContainer.value += answer + "\n";

      ansList.push(answer);

      typingAns.value = "";

      console.log(ansList);
    }
  }
});


// Make a COPY of the fruit array
const availableFruits = [...fruit];

const pickedFruits = [];


function pickNewFruit() {

  // Stop when there are no fruits left
  if (availableFruits.length === 0) {

    clearInterval(timerFruit);
    console.log("Finished!");
    console.log(pickedFruits);

    setTimeout(() => {
      document.getElementById("fruitImage").style.filter = "blur(80px)";
    }, 1000);

    return;
  }

  

  // Pick random index from available fruits
  const randomIndex =
    Math.floor(Math.random() * availableFruits.length);


  // Get the fruit
  const fruitSelector = availableFruits[randomIndex];


  // Add it to picked fruits
  pickedFruits.push(fruitSelector);


  // Remove it from available fruits
  availableFruits.splice(randomIndex, 1);
  console.log(`avalilabel:  ${availableFruits.length}`);


  // Display image
  imgContainer.innerHTML =`<img id="fruitImage" src="${fruitURL[fruitSelector]}" alt="${fruitSelector}">`;


  console.log("Current fruit:", fruitSelector);
  console.log("Picked fruits:", pickedFruits);
}


function gamePlay() {

  if (
    pickedFruits.length === ansList.length &&
    pickedFruits.every((fruit, index) => fruit === ansList[index])
  ) {
    ansContainer.value = "Congrats!";
  } else {
    ansContainer.value = "Try Again";
  }

}

// Start timer
const timerFruit = setInterval(pickNewFruit, 2000);


