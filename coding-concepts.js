// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: The console should log each character of Golf 2022 individually.
//                    
// b) Verify and explain:
// 'G', 'o', 'l',
// 'f', ' ', '2',
// '0', '2', '2'
// ]
// According to Mdn web docs. The .split() method, takes a pattern
// and divides a string into an ordered list of substrings.

// --------------------2) What will this log?

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
//  console.log(greeter("LEARN Student"))

// a) Your answer: Log should return users name. Hello, LEARN Student.
//                 Greeter(), is an high order function. 
//        Note:    Missing return statement.
// b) Verify and explain: 
//           Output:-->    undefined

//                 After review, greeter(), has no return statement.
//                        Inserted return command and console returned
//            Output:--> Hello, LEARN Student!

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//  console.log(multipliedByTwo)

// // a) Your answer: Console should return an new array 
// //                 with each value multiplied by 2.  
// //                 
// // b) Verify and explain: Output: --> [ 8, 10, 12, 14, 16 ].

// // --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//  console.log(onlyOdds)

// // a) Your answer: Console should return only odd values in an array. 
// // b) Verify and explain: Output: --> [ 11, 13, 15 ]

// // --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
//  console.log(myCodingSkills.languages[0])

// // a) Your answer: Console should return JavaScript. Using the dot notation method, 
// //                 to retrieve value in the object. 
// // b) Verify and explain: Output: --> JavaScript

// // --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name,
//     this.cohort = "Foxtrot",
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
//  console.log(learnStudent)

// // a) Your answer: Should log the name George as student in Foxtrot.
// //                 class is a keyword indicating here is the blueprint to the Learn object.
// //                 A class has basic properties and shares those properties. Though properties are
// //                 shared, new values can be inserted into properties to make an unique object.  

// // b) Verify and explain: Output: --> Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
// //                                    the new operator creates an new instance of the Learn object
// //                                    creating unique object.
