// Function that returns a promise resolving with an array after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolving after 3 seconds
    });
}

// Function to filter out odd numbers and update the DOM
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            document.getElementById("output").textContent = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000); // Resolving after 1 second
    });
}

// Function to multiply even numbers by 2 and update the DOM
function multiplyEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(num => num * 2);
            document.getElementById("output").textContent = multipliedNumbers.join(', ');
            resolve(multipliedNumbers);
        }, 2000); // Resolving after 2 seconds
    });
}

// Chaining the promises
getNumbers()
    .then(filterEvenNumbers) // First filter even numbers
    .then(multiplyEvenNumbers) // Then multiply the even numbers by 2
    .catch(error => console.error("Error:", error)); // Handle errors if any
