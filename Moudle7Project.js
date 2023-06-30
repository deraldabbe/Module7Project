// Step 2: Write Code
// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addToZero(numbers) {
    const numSet = new Set()

    for (let num of numbers) {
        const complement = -num
        if (numSet.has(complement)) {
            return true;
        }
        numSet.add(num)
    }
    return false;
}

console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1,2,3]))
console.log(addToZero([1,2,3,-2]))

// runtime complexity of the code is proportional to the number of elements
// in the array resulting in O(n).

function hasUniqueCharacters(word) {
    const charSet = new Set()

    for (let char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char)
    }
    return true;
}

console.log(hasUniqueCharacters('hello'))
console.log(hasUniqueCharacters('wolrd'))
console.log(hasUniqueCharacters('bananas'))
console.log(hasUniqueCharacters('cheese'))
// False, True, False, False
// O(n)

function isPangram(sentence) {
    const alphabetSet = new Set()

    for (let char of sentence) {
        if (char.match(/[a-zA-Z]/)) {
            alphabetSet.add(char.toLowerCase())
        }
    }
    return alphabetSet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("hello world"))
console.log(isPangram("Pack my box with five dozen liquor jugs."))
console.log(isPangram("Is not a pangram."))
// True, False, True, False
// O(1)

function findLongestWord(words) {
    let longestLength = 0

    for (let word of words) {
        if (word.length > longestLength) {
            longestLength = word.length
        }
    }
    return longestLength;
}

console.log(findLongestWord(['banana', 'apples', 'oranges']))
console.log(findLongestWord(['computer', 'mouse', 'keyboard']))
console.log(findLongestWord(['hello', 'world', 'globe']))
console.log(findLongestWord(['dog', 'cat', 'sloth']))
// 7, 8, 5, 5
// O(1)

