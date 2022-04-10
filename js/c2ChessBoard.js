// chess board

const symbol = "#"
const size = 8
let board = ""

for (let i = 1; i <= (size); i++) {
    if (i % 2 !== 0) {
        for (let i = 1; i <= (size); i++) {
            if (i % 2 === 0) {
                board = board + symbol
            }else {
                board = board + " "
            }
        }
    }else {
        for (let i = 1; i <= (size); i++) {
            if (i % 2 !== 0) {
                board = board + symbol
            }else {
                board = board + " "
            }
        }
    }
    board = board + "\n"
}

console.log(board)


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
