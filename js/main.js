
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

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

target = 24
current, history
// starting numbers from return find(1,"1")
1, "1"
// add 5
6, "(1 + 5)" //too low
// add 5
(11, "(1 + 5 + 5") // too low
// add 5
(16, "1 + 5 + 5 + 5") // too low