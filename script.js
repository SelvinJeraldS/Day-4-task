//Do the below programs in anonymous function & IIFE
//! Print odd numbers in an array

var res = [];
var a = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//! using IIEF


(function (arr) {                   
  let result = [];                  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] % 2 !== 0) {         
      result.push(arr[i]);         
    }
  }
  return console.log(result);                   
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  


//! using ArrorFunction
let result1 = [];
var res1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result1.push(arr[i]);
    }
  }
  return result1;
};
console.log(res1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// console.log(res1);

//! Convert all the strings to title caps in a string array



//? Anonymous function

let convertToTitleCaps = function(arr) {
  let result = [];
  for (let str of arr) {
      result.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  }
  return result;
};
console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// IIFE
(function(arr) {
  let result = [];
  for (let str of arr) {
      result.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  }
  console.log(result); // result;
}) (["hello", "world", "javascript"]);
//Arror Function

var TitlesToCaps =(arr)=>{let result = [];
  for (let str of arr) {
      result.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  }
  return result;} 
console.log(TitlesToCaps(["hello", "world", "javascript"]));


//! Sum of all numbers in an array

// Anonymous function
let sumArray = function(arr) {
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  console.log(sum);
};
(sumArray([1, 2, 3, 4, 5]));

// IIFE
(function(arr) {
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  console.log(sum);
})([1, 2, 3, 4, 5]);

//!Arrow Function

var sumofarray=(arr)=>{
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  console.log(sum);
}
(sumofarray([1, 2, 3, 4, 5]));


//! Return all the prime numbers in an array

let getPrimes = function(arr) {
  let primes = [];
  for (let num of arr) {
      let isPrimeFlag = true;
      if (num <= 1) {
          isPrimeFlag = false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              isPrimeFlag = false;
              break;
          }
      }
      if (isPrimeFlag) {
          primes.push(num);
      }
  }
  return primes;
};

console.log(getPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14]));

//! IIEF

( function(arr) {
  let primes = [];
  for (let num of arr) {
      let isPrimeFlag = true;
      if (num <= 1) {
          isPrimeFlag = false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              isPrimeFlag = false;
              break;
          }
      }
      if (isPrimeFlag) {
          primes.push(num);
      }
  }
  console.log(primes);
})  ([2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14]);

//!Arrow Function

let GetAllPrimes =(arr)=>{
  let primes = [];
  for (let num of arr) {
      let isPrimeFlag = true;
      if (num <= 1) {
          isPrimeFlag = false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              isPrimeFlag = false;
              break;
          }
      }
      if (isPrimeFlag) {
          primes.push(num);
      }
  }
  console.log(primes);
}
console.log(getPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14]));
//! Return all the palindromes in an array
// Anonymous function
let getPalindromes = function(arr) {
  let palindromes = [];
  for (let str of arr) {
      let left = 0;
      let right = str.length - 1;
      let isPalindrome = true;
      while (left < right) {
          if (str[left] !== str[right]) {
              isPalindrome = false;
              break;
          }
          left++;
          right--;
      }
      if (isPalindrome) {
          palindromes.push(str);
      }
  }
  console.log(palindromes);
};

getPalindromes(["level", "hello", "radar", "world", "madam"]);


//! IIFE
 (function(arr) {
  let palindromes = [];
  for (let str of arr) {
      let left = 0;
      let right = str.length - 1;
      let isPalindrome = true;
      while (left < right) {
          if (str[left] !== str[right]) {
              isPalindrome = false;
              break;
          }
          left++;
          right--;
      }
      if (isPalindrome) {
          palindromes.push(str);
      }
  }
 
console.log(palindromes);
})(["level", "hello", "radar", "world", "madam"]);


//! Arrow Function
let PalindromesOfString=(arr)=> {
  let palindromes = [];
  for (let str of arr) {
      let left = 0;
      let right = str.length - 1;
      let isPalindrome = true;
      while (left < right) {
          if (str[left] !== str[right]) {
              isPalindrome = false;
              break;
          }
          left++;
          right--;
      }
      if (isPalindrome) {
          palindromes.push(str);
      }
  }
 
console.log(palindromes);
}
(PalindromesOfString(["level", "hello", "radar", "world", "madam"]));


//! Return median of two sorted arrays of the same size.
// Anonymous function
let medianOfArrays = function(arr1, arr2) {
  let merged = arr1.concat(arr2).sort((a, b) => a - b);
  let length = merged.length;
  if (length % 2 === 0) {
    console.log((merged[length / 2 - 1] + merged[length / 2]) / 2);;

      
  } else {
    console.log(merged[Math.floor(length / 2)])
      
  }
};(medianOfArrays([1, 3, 5], [2, 4, 6]))
console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));

// IIFE
(function(arr1, arr2) {
  let merged = arr1.concat(arr2).sort((a, b) => a - b);
  let length = merged.length;
  if (length % 2 === 0) {
      console.log((merged[length / 2 - 1] + merged[length / 2]) / 2);;
      
  } else {
      console.log(merged[Math.floor(length / 2)])
  }
})(([1, 3, 5], [2, 4, 6]));

console.log(([1, 3, 5], [2, 4, 6]))

//! Remove duplicates from an array

// Anonymous function

let removeDuplicates = function(arr) {
  let unique = [];
  for (let item of arr) {
      if (!unique.includes(item)) {
          unique.push(item);
      }
  }
  return unique;
};console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]));

// IIFE

(function(arr) {
  let unique = [];
  for (let item of arr) {
      if (!unique.includes(item)) {
          unique.push(item);
      }
  }
  console.log(unique);
 
})([1, 2, 2, 3, 4, 4, 5, 5]);


//! Rotate an array by k times

// Anonymous function

let rotateArray = function(arr, k) {
  let n = arr.length;
  k %= n;
  return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// IIFE 
 (function(arr, k) {
  let n = arr.length;
  k %= n;
  let rotateArray=arr.slice(k).concat(arr.slice(0, k));
  console.log(rotateArray);
  
})([1, 2, 3, 4, 5], 2);

