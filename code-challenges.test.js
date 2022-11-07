// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers 
// and returns an array with all the numbers multiplied by 3.


// Psuedo Code: Create a function called multiplyByThree
        //      Parameters: 1 [array]
        //      Iterate over array using .map method; mulltiply each value by three
        //      array.map(value => value * 3 )
        //      Multiply each value by 3
        //      return: Mapped array
// a) Create a test with expect statements for each of the variables provided.

//  describe("multiplyByThree", () => {
//    it("returns an array with all the numbers multiplied by 3", () => {
//          expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//          expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//        })
//  })

 // b) Create the function that makes the test pass.
// const multiplyByThree = (array) => {
//    return array.map((value) => value * 3)
//}

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// Ran Test
// ReferenceError: multiplyByThree is not defined

// Ran yarn jest--> Test Suites: 1 failed, 1 total
//                  Tests:       1 failed, 1 total

// Ran yarn jest--> Test Suites: 1 passed, 1 total
//                  Tests:       1 passed, 1 total

// --------------------1) Create a function that takes a object as an argument and 
//                        decides if the number inside it is evenly divisible by three or not.

// Prompt: Create a function which takes a object.--> const evedivThree(object). 
// Inputs: Object
// (Note: Instructor node...)-->emphasis...
// Outputs: numbers inside it is easily divisible by three or not. 
// 
// a) Create a test with expect statements for each of the variables provided.

// describe("evedivThree", () => {
//   it("decides if the number inside it is evenly divisible by three or not.", () => {
//     expect(evedivThree()).toEqual("15 is divisible by three")
//    // expect(evedivThree(obj)).toEqual("15 is divisible by three")
//   //  expect(evedivThree(obj)).toEqual("15 is divisible by three")
//   })
// })

//     ReferenceError: evedivThree is not defined
//     TypeError: Cannot read properties of undefined (reading 'values')
// const evedivThree = (object) => object.keys.values.map((values) =>`${value} % 3 === 0) is divisible by three`)


//const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
//const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
//const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with 
//                        all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("capitlizer", () => {
//   it("takes in an array of words and returns an array with all the words capitalized.", () => {
//     expect(capitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//     expect(capitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//   })
// })

// Psuedocode
// Prompt: Create a function that takes in an array of words.

// Input: [array]
// Output: Capitalize all words 
// Iterate over array using .map(), to modify and return each value/word capitalized. 
// Note: Used other methods(only slice the first value in index, then used a method to re
//                          rest of string to be lowerCased).

// ReferenceError: capitlizer is not defined

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// const capitalizer = (array) => array.map((value) => value[0].toUpperCase() + value.slice(1).toLowerCase())
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Psuedocode
// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Input: String
// Output: Logs the index of the first vowel
// Iterate over array using .flter(), to returns index of the first vowel. 
// Note: Used other methods(only slice the first value in index, then used a method to re
//                          rest of string to be lowerCased).

// // a) Create a test with expect statements for each of the variables provided.

//     describe("logger", () => {
//         it("takes in a string and logs the index of the first vowel", () => {
//         expect(logger(vowelTester1)).toEqual(1)
//         expect(logger(vowelTester2)).toEqual(0)
//         expect(logger(vowelTester3)).toEqual(2)
//      })
// })

// // ReferenceError: logger is not defined
 
//  const vowelTester1 = "learn"
// // // Expected output: 1

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total

//  const vowelTester2 = "academy"
// // // Expected output: 0
//  const vowelTester3 = "challenges"
// // Expected output: 2

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total

// // b) Create the function that makes the test pass.

//  const logger = (str) => str.search(/[a, e, i, o, u, A, E, I, O, U]/g) 
