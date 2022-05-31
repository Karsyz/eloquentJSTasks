// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 

// Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean (true/false).

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

function isEven(num) {
    if (num < 0) {
        return isEven(-num)
    }else if (num === 0) {
        return true
    } else if (num === 1) {
        return false
    } else {
        return isEven(num - 2)
    }   
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// notes:  At first I didn't fully understand the methodology used in the question.  I serached and found more clarity to the problem where if 0 is even and 1 is odd, all other numbers need to be subtracted by 2 until that number is either a 1 or a 0, at which time can be determined if it is either even or odd.