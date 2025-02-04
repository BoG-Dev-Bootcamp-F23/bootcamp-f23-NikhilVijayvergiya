/**
 * Let's do some coding warm up to get you started with JS!
 *
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the
 * letter grade (as a string) corresponding to it. Return "INVALID" if the
 * integer is outside the range [0, 100].
 *
 * Letter grade:
 * A = 90 -> 100
 * B = 80 -> 89
 * C = 70 -> 79
 * D = 60 -> 69
 * F = anything < 60
 */
function toLetterGrade(numGrade) {
  // TODO
  if (numGrade < 0) {
    return "INVALID";
  } else if (numGrade < 60) {
    return "F";
  } else if (numGrade < 70) {
    return "D";
  } else if (numGrade < 80) {
    return "C";
  } else if (numGrade < 90) {
    return "B";
  } else if (numGrade <= 100) {
    return "A";
  } else {
    return "INVALID";
  }
}

/**
 * Task 2: Create a function that takes in an array of integers and returns a
 * new array containing only even elements from the original array. The
 * ordering of the remaining elements should be the same as the original array.
 *
 * Example: [9, 3, 4, 1, 2, 0] --> [4, 2, 0]
 */
function getEvenElements(array) {
  let result = array.filter(curr => (curr % 2 == 0));
  return result;
  // TODO
}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH
 * of the longest word in that sentence. No punctuation will appear in the
 * sentence.
 *
 * Hint: The .split() method might be useful here
 *
 * Example: "I love Bits of Good" --> 4
 */
function findLongestWord(string) {
  const arr = string.split(" ");
  let length = 0;
  arr.forEach(curr => {
    if (curr.length > length) {
      length = curr.length;
    }
  })
  return length;

  // TODO
}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that 
 * is the combination of the 2
 *
 * Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    } 
 */
function combineObjects(object1, object2) {

  // let arr = {};
  // for (let key in object1) {
  //   arr[key] = object1[key];
  // }

  // for (let key in object2) {
  //   arr[key] = object2[key];
  // }

  // return arr;

  const combined = {
    ... object1,
    ... object2
  };
  return combined;
  

  // console.log(arr);
  // TODO
}

/**
 *  Task 5: Create a function that takes an array as an argument and returns
 *  the reverse array.
 *
 *  DO NOT USE THE .reverse() METHOD!!
 *
 *  Example: [1, 2, 3] -> [3, 2, 1]
 */
function reverseArr(array) {
  let arr = [];
  for (var key = array.length - 1; key >= 0; key--) {
    arr.push(array[key]);
  }
  return arr;
  // TODO
}

// DO NOT EDIT BELOW THIS LINE -- the code is for testing purposes only!
// To test your code, run `node warmUp.js` in your terminal

import {
  testToLetterGrade,
  testGetEvenElements,
  testFindLongestWord,
  testCombineObjects,
  testReverseArr,
} from "./warmUpTests.js";

console.log("TEST RESULTS:");
testToLetterGrade(toLetterGrade);
testGetEvenElements(getEvenElements);
testFindLongestWord(findLongestWord);
testCombineObjects(combineObjects);
testReverseArr(reverseArr);
