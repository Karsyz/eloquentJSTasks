// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   link: {
//     value: 2,
//     link: {
//       value: 3,
//       link: null
//     }
//   }
// };

// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, link: list} and {value: -1, link: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// Your code here.


// let list = {value: 10, link: {value: 20, link: null} }
// console.log(list)
let arr = [10, 20]

let num = {
  value: null,
  link: null
}

console.log(arr.length)

for (i = 0; i < arr.length; i++) {
  num.value = arr[i]
  num.link = {num.value = arr
}

console.log(num)

// function arrayToList(arr) {

  
//   var node = list;
//   while(node) {
//     array.push(node.value);
//     node = node.link;
//   }



//   return node
// }

// console.log(arrayToList([10, 20]));
// → {value: 10, link: {value: 20, link: null}}

// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, link: {value: 20, link: null}}

// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20