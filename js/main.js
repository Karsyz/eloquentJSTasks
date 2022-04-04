
//  do while loop
// let yourName
// do {
//     yourName = prompt("What is your name?")
// } while (!yourName) {
//     console.log(yourName)
// }

// console.log(yourName.length)



// looping a triangle

// let hashTag = ""

// for (let i = 0; i < 7; i++) {
//     hashTag = hashTag + "# "
//     console.log(hashTag)
// }


//  FizzBuzz

// for (let i = 1; i <= 100; i++) {
//     if ((i % 5 === 0) && (i % 3 === 0)) {
//         console.log("FizzBuzz")
//     }else if (i % 5 === 0) {
//         console.log("Buzz")
//     }else if (i % 3 === 0) {
//         console.log("Fizz")
//     }else {
//         console.log(i)
//     }
// }


// chess board

// const symbol = "#"
// const size = 20
// let board = ""

// for (let i = 1; i <= (size); i++) {
//     if (i % 2 === 0) {
//         console.log(`${symbol} ${symbol} ${symbol} ${symbol} `)
//     }else {
//         console.log(` ${symbol} ${symbol} ${symbol} ${symbol}`)
//     }
// }


// const symbol = "#"
// const size = 8
// let board = ""

// for (let i = 1; i <= (size); i++) {
//     if (i % 2 !== 0) {
//         for (let i = 1; i <= (size); i++) {
//             if (i % 2 === 0) {
//                 board = board + symbol
//             }else {
//                 board = board + " "
//             }
//         }
//     }else {
//         for (let i = 1; i <= (size); i++) {
//             if (i % 2 !== 0) {
//                 board = board + symbol
//             }else {
//                 board = board + " "
//             }
//         }
//     }
//     board = board + "\n"
// }

// console.log(board)


//  chessboard refactored
//  new way of thinking
//  thinking in 2 dimensions at the same time requires the conditional to also have 2 dimensions (row + col)
// const symbol = "#"
// const size = 8
// let board = ""

// for (let row = 0; row < size; row++) {
//         for (let col = 0; col < size; col++) {
//             if ((row + col) % 2 === 0) {
//                 board += " "
//             }else {
//                 board += symbol
//             }
//         }
//     board += "\n"
// }

// console.log(board)



// function wrapValue(n) {
//     // let local = n;
//     // return () => local;
//     return local => local = n * 2;
//   }
  
//   let wrap1 = wrapValue(1);
//   let wrap2 = wrapValue(2);
//   console.log(wrap1());
//   // → 1
//   console.log(wrap2());
//   // → 2

//   function multiplier(factor) {
//     return number => number * factor;
//   }
  
//   let twice = multiplier(2);

//   let asdf = twice
//   console.log(twice(5));
//   // → 10



//  find position of first letter of each word in a string and capitalize
// function upper (str) {
//   let newString = ""
//   for (i = 0; i < str.length; i++) {
//     if (i === 0) {
//       newString += str.charAt(i).toUpperCase()
//     }else if (str.charAt(i) === " ") {
//       newString += str.charAt(i)
//       newString += str.charAt(i + 1).toUpperCase()
//       i++
//     }else {
//       newString += str.charAt(i)
//     }
//   }
//   console.log(newString)
// }
  
  // str.charAt(i).toUpperCase()

  // str.charAt(0).toUpperCase()

// upper("Abcd  efgh ijkl mnop qrst uvwx yz")

//  find position of first letter of each word in a string and capitalize
String.prototype.toJadenCase = function () {
  let newString = ""
for (i = 0; i < this.length; i++) {
  if (i === 0) {
    newString += this.charAt(i).toUpperCase()
  }else if (this.charAt(i) === " ") {
    newString += this.charAt(i)
    newString += this.charAt(i + 1).toUpperCase()
    i++
  }else {
    newString += this.charAt(i)
  }
}
  return newString
}

let uppercased = "Abcd efgh ijkl mnop qrst uvwx yz".toJadenCase()

console.log(uppercased)