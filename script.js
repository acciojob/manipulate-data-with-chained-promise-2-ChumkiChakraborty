//your JS code here. If required.
// Function that returns a promise resolving after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Resolve with the array after 3 seconds
        }, 3000);
    });
}

// Function to filter even numbers
function filterEvenNumbers(numbers) {
    return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
            resolve(evenNumbers); // Resolve with even numbers after 1 second
        }, 1000);
    });
}

// Function to multiply even numbers by 2
function multiplyByTwo(numbers) {
    return new Promise((resolve) => {
        const multipliedNumbers = numbers.map(num => num * 2);
        setTimeout(() => {
            resolve(multipliedNumbers); // Resolve with multiplied numbers after 2 seconds
        }, 2000);
    });
}

// Chaining the promises and updating the output
getNumbers()
    .then(filterEvenNumbers)
    .then((evenNumbers) => {
        // Update output with even numbers
        document.getElementById('output').innerText = `Even Numbers: ${evenNumbers.join(', ')}`;
        return multiplyByTwo(evenNumbers); // Return the promise to chain it
    })
    .then((result) => {
        // Update output with multiplied numbers
        document.getElementById('output').innerText += `\nMultiplied Numbers: ${result.join(', ')}`;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('output').innerText = 'An error occurred.';
    });
