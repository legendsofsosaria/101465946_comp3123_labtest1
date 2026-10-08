/* COMP 3123 - Lab Test 1
 Question 3
 Elizabeth House
 Student ID 101465946
 10/08/2026

 Remove Log files
 - remove all the files from the Logs directory, if exists
 - output the file names to delete
 - remove the Logs directory
 */

// Use fs module and process the current working directory to build directory path
const fs = require('node:fs');
const folderName = './Logs';

// Check if the folder exists first
if (fs.existsSync(folderName)) {
    // Get the file names before deleting the folder
    const files = fs.readdirSync(folderName);

    // Recursively remove a folder with contents
    fs.rm(folderName, { recursive: true, force: true}, err => {
        if (err) {
            throw err;
        }
        // Print the list of file names that are deleted
        for (let filename of files)
        {
            console.log(`${filename} is deleted!`);
        }
    });
}
// Otherwise, nothing to remove
else {
    console.log(`${folderName} does not exist`);
}


