/* COMP 3123 - Lab Test 1
 Question 3
 Elizabeth House
 Student ID 101465946
 10/08/2026

 Create Log files
 - create a Logs directory, if it does not exist
 - change the current process to the new Logs directory
 - create 10 log files and write some text into the file
 - output the files names to console
 */

const fs = require('node:fs');
const folderName = './Logs';

// Check if the folder exists first, if not, add the directory
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
}
catch (err) {
    console.log(err);
}

// I don't know if you wanted different content in each file, but I kept it simple and put the same content in each since it didn't specify
//  Make an array of lines, join with escape character
let lines = ["Some content!", "More content!", "Some things", "idk what to put here", "pizza"];
let content = lines.join("\n");

// Loop to make the files since I don't want to make so many individually :)
for (let i = 0; i < 10; i++){
    // I'm sure there is a better way to do this but I didn't want the directory name going in with the file name when I print it
    // I also don't know why they are going out of order when I print the file names
    let fileNames = `log${i}.txt`;
    const filePaths = `./Logs/log${i}.txt`;

    // write the content to the files
    fs.writeFile(filePaths, content, err => {
        if (err) {
            console.log(err);
        }
        // Output the file names
        else {
            console.log(`${fileNames} written successfully!`);
        }
    });
}
