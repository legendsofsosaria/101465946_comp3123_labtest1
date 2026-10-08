/* COMP 3123 - Lab Test 1
Question 1
Elizabeth House
Student ID 101465946
10/08/2026

Create a script with a function named lowerCaseWords that takes a
mixed array as input.
The function will do the following.
 - return a promise that is resolved or rejected
 - filter the non-strings and lower case the remaining words
*/

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(mixedArray); // Printing first, to show the array contained the required initial values

function lowerCaseWords(input_array)
{
    // Returns a promise that is resolved or rejected
    return new Promise((resolve, reject) => {
        // Check if what we are passing is an array, if it's not, reject it.
        if (!Array.isArray(input_array))
        {
            reject("The input must be an array");
            return;
        }
        // Check if what we are passing isn't an empty array.
        // Since we are manipulating the input to lowercase, it should contain data.
        if (input_array.length === 0)
        {
            reject("array cannot be empty");
            return;
        }

        const output_array = input_array
            // Filter the input array to find strings
            .filter(element => typeof element === "string")
            // Use map to change the strings in the mixed array to lowercase
            .map(element => element.toLowerCase());

        resolve(output_array);
    });
}
// Func call for lowercase words on the mixed array input
lowerCaseWords(mixedArray)
    // log the result of our promise
    .then(result => {
        console.log(result);
    })
    // Catch any errors
    .catch(error => {
        console.error(error);
    });
