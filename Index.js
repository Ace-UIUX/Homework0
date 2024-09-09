// 1. Define an object called corolla
let corolla = {
    horsePower: 150,
    year: 2020,
    color: "blue"
};

// 2. Make a deep copy of the corolla object called civic
let civic = { ...corolla, horsePower: 180 }; // Copy with updated horsePower

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

// Example call to showName - You can comment this out after testing
// showName("Emmanuel");

// 5. Create an array that holds students' grades
let grades = [85, 90, 78, 92, 88];

// 6. Loop through the array and add 5 to each element
for (let i = 0; i < grades.length; i++) {
    grades[i] += 5;
}

// Log the updated grades
console.log("Updated grades:", grades);

// Favorite colors script
let favoriteColor = "blue";
let age = 25;
const name = "John Doe";
let isMinor = age < 18;
let favoriteColors = ["blue", "green", "red"];
let myBestFriendFavoriteColors = [...favoriteColors];
favoriteColors[favoriteColors.length - 1] = "purple";
myBestFriendFavoriteColors[0] = "yellow";
console.log("My friend's favorite colors:", myBestFriendFavoriteColors, "My favorite colors:", favoriteColors);
alert("My favorite colors: " + favoriteColors);
alert("My best friend's favorite colors: " + myBestFriendFavoriteColors);
