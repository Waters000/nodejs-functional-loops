const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition.
const evenNumbers = originalArray.filter(function(data) {
  // The anonymous function uses a conditional to check if a number is divisible by 2.
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(originalArray);

console.log(evenNumbers);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};



// TODO: Using the variable isPrime to filter the originial array into the prime array.
const primeArray = originalArray.filter(isPrime);

console.log(primeArray);

// TODO: using a function within the filter method to filter the array
const moreThan5Array = originalArray.filter(num => num > 5);

console.log(moreThan5Array);