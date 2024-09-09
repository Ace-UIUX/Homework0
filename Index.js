// Function to change the paragraph text when the button is clicked
function changeParagraphText() {
    const paragraph = document.getElementById('textParagraph');
    if (paragraph) {
        paragraph.innerText = "Button was clicked!";
    } else {
        console.error('Paragraph element not found!');
    }
}

// Add event listener for the button once the DOM content has loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeTextButton');
    if (button) {
        button.addEventListener('click', changeParagraphText);
    } else {
        console.error('Button element not found!');
    }
});

// Remaining script (same as previous)

// 1. Define an object called corolla
let corolla = {
    horsePower: 150,
    year: 2020,
    color: "blue"
};

// 2. Make a deep copy of the corolla object called civic
let civic = { ...corolla, horsePower: 180 };

// Verify changes
console.log("Corolla:", corolla);
console.log("Civic:", civic);

// 3. Create a function that subtracts two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

console.log("Subtraction of 10 and 3:", subtract(10, 3)); // Example usage

// 4. Create a void function that expects a name and opens an alert
function showName(name) {
    alert("The name is: " + name);
}

// 5. Create an array that holds students' grades
let grades = [85, 90, 78, 92, 88];

// 6. Loop through the array and add 5 to each element
for (let i = 0; i < grades.length; i++) {
    grades[i] += 5;
}

// Log the updated grades
console.log("Updated grades:", grades);

// Problem 1: Function to check if a number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10)); // Positive
console.log(checkNumber(-5)); // Negative
console.log(checkNumber(0));  // Zero

// Problem 2: Function to print all even numbers from 1 to 20
function printEvenNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNumbers(); // 2, 4, 6, ..., 20

// Problem 3: Function to print a countdown from a given number to zero
function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countdown(5); // 5, 4, 3, 2, 1, 0

// Problem 4: Function to guess a number between 1 and 10
function guessNumber() {
    let numberToGuess = Math.floor(Math.random() * 10) + 1;
    let guess;
    do {
        guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    } while (guess !== numberToGuess);
    alert("Correct! The number was " + numberToGuess);
}
