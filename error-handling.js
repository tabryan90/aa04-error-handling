// // 1.

//   function sum(array) {
//     if ( !Array.isArray(array) ){
//       throw new TypeError('Error: Array is not an array');
//     }

//   let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }

//     return sum;

//   };

// try {
//   let res = sum(null);
//   console.log(res);
// } catch (e) {
//   console.error(e.message);
// }

// 2.

// function sayName(name) {
//   if (typeof name !== 'string') {
//     throw new TypeError('Invalid name! Must be a string!');
//   }

//   console.log(name);

// };

// try {
//   sayName("Alex");
//   sayName(1);
// } catch (e) {
//   console.error(e.message)
// }


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet('Hi');
} catch (e) {
  console.log('Hello World!')
}
