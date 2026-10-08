/* COMP 3123 - Lab Test 1
 Question 2
 Elizabeth House
 Student ID 101465946
 10/08/2026

Given the script file callbacks.js, write a script that does the following:
 - Create a method resolvedPromise that is similar to
 delayedSuccess and resolves a message after a timeout of 500ms.
 - Create a method rejectedPromise that is similar to
 delayedException and rejects an error message after a timeout of
 500ms.
 - Call both promises separately and handle the resolved and reject
 results and then output to the console
 */

// Method for successful resolved promise declaration that sends the delayed success message
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500) // 500 ms timeout
    });
};

// Method for rejected promise declaration that sends the delayed exception message
// I'm not sure if this is how you wanted the error handled for the promise, but I just judged it off the output you had on the pdf
// so I followed what we did in the lab
const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
           let error = true; // simulate an error
           if (error)
           {
               // reject the promise, with the message delayed exception
               reject({message: 'delayed exception!'});

           }
        }, 500) // 500 ms timeout
    });
}

// Calls for resolved and rejected promises with results printed to console
resolvedPromise()
    .then(result => {
        console.log(result);
    });

rejectedPromise()
    .then(result => {
        console.log(result);
    });
