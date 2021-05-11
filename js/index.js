// This is a console.log, which prints to the browser's console
console.log("Hi, I'm the console.log");

("Hi, I'm the console.log");

const helloMessage = "Hi, I'm the console.log";
let goodbyeMessage = "Good bye.";

console.log(helloMessage);
console.log(goodbyeMessage);

console.log(helloMessage + " " + goodbyeMessage);

goodbyeMessage = "See you.";
console.log(goodbyeMessage);

const theOtherHelloMessage = "Hi.";

const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

console.log("before", title.classList);
title.classList.add("text");
console.log("after", title.classList);

title.classList.remove("title");
console.log("after remove", title.classList);

// You can change the textContent dynamically
// title.textContent = "Hello";
// console.log(title);

// Data types

const aString = "In quotes";

// string vs integer
const alsoString = "9";
const integer = 9;

// float vs. integer
const aFloat = 9.0;
const anInteger = 9;

// boolean vs. everything
const aBoolean = true;
const anotherB = false;
const notABoolean = "false";
// const alsoNotABoolean = False;

// array
const anArray = [
  "pants",
  "shirts",
  "socks",
  9,
  10,
  11,
  true,
  ["hi", "shalom", "hola"],
];

// Using index position with a string
// const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const last = txt.length - 1;
// console.log(last);
// console.log(txt[last]);

// let sln = txt.length;
// console.log("sln 1", sln);

// const empty = "";
// sln = empty.length;
// console.log("sln 2", sln);

const str = "Please locate where 'locate' occurs!";
const pos = str.search("locate");
console.log(pos);

const text1 = "Hello World!"; // String
const text2 = text1.toUpperCase(); // "HELLO WORLD!
console.log(text2);

//Convert string to number data type
let newNumber = parseInt("999");
console.log(newNumber);

//Convert string to number data type
// newNumber = parseFloat("999.0").toFixed(1);
// console.log(newNumber);
// title.textContent = newNumber;

// const newBoolean = true;
// const newString = "true";
// console.log(typeof newBoolean);
// console.log(typeof newString);

// if (newBoolean === true) {
//   console.log("dinner is ready");
// }

// if (10 > 9) {
//   console.log(10 > 9);
// }

// Using index position with a array
// const thisArray = ["one", "two", "three", "four"];
// const two = thisArray[1];
// const lastItem = thisArray[thisArray.length - 1];
// console.log(two);
// console.log(lastItem);

// const regularSentence = "Hi there, everybody. I am a sentence.";

// for (i = 0; i < regularSentence.length; i++) {
//   if (regularSentence[i] === "e") {
//     console.log(i);
//   } else {
//     console.log(regularSentence[i]);
//   }
// }

// Live Code Day 6
const imagesArray = [
  "terry_crews_one.jpeg",
  "terry_crews_two.jpeg",
  "terry_crews_three.jpeg",
];
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const image = document.getElementById("largeImage");

let index = 0;

image.src = "./images/" + imagesArray[index]; // ./image/terry_crews_one.jpeg
console.log("enabled", prevButton.enabled);
const toggleDisabled = () => {
  if (index === 0) {
    prevButton.disabled = true;
    nextButton.disabled = false;

    prevButton.classList.remove("button-enabled");
    prevButton.classList.add("button-disabled");

    nextButton.classList.remove("button-disabled");
    nextButton.classList.add("button-enabled");
  } else if (index === imagesArray.length - 1) {
    prevButton.disabled = false;
    nextButton.disabled = true;

    prevButton.classList.add("button-enabled");
    prevButton.classList.remove("button-disabled");

    nextButton.classList.add("button-disabled");
    nextButton.classList.remove("button-enabled");
  }
};

const moveBack = () => {
  console.log("move back");
  index--;
  image.src = "./images/" + imagesArray[index];
  // Check whether index is equal to the index position of the first item in our array
  // Implemented this before using the toggleDisable()
  // if (nextButton.disabled !== false) {
  //   nextButton.disabled = false;
  // }

  toggleDisabled();
  if (index === 0) {
    // Disable the previous button because no more items after it
    prevButton.disabled = true;
  }
  return "hi guys";
};

const moveForward = () => {
  // console.log("move forward");
  index++;
  // console.log(index);
  image.src = "./images/" + imagesArray[index];
  // The array.length - 1 is always the last item in the array
  // Check whether index is equal to the index position of the last item in our array

  // Implemented this before using the toggleDisable()
  // if (prevButton.disabled !== false) {
  //   prevButton.disabled = false;
  // }
  toggleDisabled();
  if (index === imagesArray.length - 1) {
    // Disable the next button because no more items after it
    nextButton.disabled = true;
  }
};

prevButton.addEventListener("click", moveBack);
nextButton.addEventListener("click", moveForward);
