// DOT METHOD
// const cat = {};

// cat.name = "Olive";
// cat.nickname = "Mitten";
// cat.age = 5;
// cat.isSleeping = true;
// cat.favoriteFoods = ["chips", "canned fish", "chicken"];
// cat.pet = function () {
//   return "purrrrrrrr";
// };
// console.log(cat);
// console.log(cat.nickname);
// console.log(cat.favoriteFoods);
// console.log(cat["name"]); ***USED WITH FOR..IN LOOPS

//OBJECT LITERAL SYNTAX = KEY0VALUE PAIRS INSIDE BRACES
// const cat = {
//   name: "Olive",
//   nickname: "Mitten",
//   age: 5,
//   isSleeping: true,
//   favoriteFoods: ["chips", "canned fish", "chicken"],
//   pet: function () {
//     return "purrrrrrrr";
//   }
// };
//ADD or MODIFY VALUES
// cat.isSleeping = false;
// cat["color"] = "calico";
// console.log(cat);

//"THIS" KEYWORD

// cat.play = function () {
//   this.isSleeping = false;
//   return `${this.nickname} is awake and ready to rumble!`;
// };
// console.log(cat.play());

// Place method inside object literal

// const cat = {
//   name: "Olive",
//   nickname: "Mitten",
//   age: 5,
//   isSleeping: true,
//   favoriteFoods: ["chips", "canned fish", "chicken"],
//   pet: function () {
//     return "purrrrrrrr";
//   },
//   play: function () {
//     this.isSleeping = false;
//     return `${this.nickname} is awake and ready to rumble!`;
//   }
// };
// console.log(cat.play());

//COMPOUND ASSIGNMENT OPERATORS
// let paperclips = 10;
// paperclips = paperclips + 2;
// console.log(paperclips);

//BECOMES

let paperclips = 10;
paperclips += 2;
console.log(paperclips);
