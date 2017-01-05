console.log('Part 1: functional solutions to practice problems');

// 1. containsVowel
console.log('01 | containsVowel');
/**
 * Write a function called containsVowel that takes a single string and returns true 
 * if there is at least one value or false otherwise.
 */

function isVowel(letter) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        return true;
    } else {
        return false;
    }
}

// Return boolean
function containsVowel(word) {
    let letters = word.split('');

    // 1. break the word into letters (split)
    // 2. find out which of those letters are vowels
    // 3. if one or more are, return true

    return letters.filter(isVowel).length > 0;
}

console.log(containsVowel('Kick'));

// 2. divisors
console.log('02 | divisors');
/**
 * Write a function called divisors that accepts a number and returns an array of all
 * of the numbers that divide evenly into it.
 */
function range(min, max) {
let arr = [];
  
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
  
    return arr;
    }

function divisors(num) {
    function isDivisible(current) {
        return num % current === 0;
    }
let nums = range(1, num).filter(isDivisible);
    return nums;

}

console.log(divisors(75));

// 3. boost
console.log('03 | boost');
/**
 * 1. convert 48 to [4, 8] -- suggestion: convert to string, then split, then parseInt
 * 2. increment all the digits (or go back to 0 if its a 9)
 * 3. recombine them with join() and then parseInt
 */

function boost(num) {
    
    let digits = num.toString().split('') // note: array of STRINGS
    digits = parseInt(digits.map(parse).map(increment).join(''));
    return digits;
}

function parse(digit) {
    return parseInt(digit);
}

function increment(num) {
    if (num < 9) {
        return num + 1;
    } else {
        return 0;
    }
}

console.log(boost(187));


// 4. multiples
console.log('04 | multiples');

function range(min, max) {
let arr = [];
  
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
  
    return arr;
    }

function multiples(one, two) {
    function isDivisible(current) {
        return current % one === 0 && current % two === 0;
    }
    // 1. start with an array 1 - 100 (range)
    // 2. keep things divisible by first and second, discard the rest (filter)
    let nums = range(1, 100).filter(isDivisible);
    return nums;
}

console.log(multiples(6, 7));


console.log('Part 2: reinventing map and filter');

function map(array, func) {
    let array = [];
    
}