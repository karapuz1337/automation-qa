// Create a callback function that prints text

const printText = (text) => {
    // Check if text param is given
    if (!text) {
        throw new Error("Please provide the text as a parameter");
    }

    // Print text
    console.log(text);
};

// Create a function with setTimeout
const addTimeoutToPrint = (callback, delay=1000, text=`Text after ${delay} ms`) => {
    // Check if both params are given
    if (!callback || !delay) {
        throw new Error("Please provide the callback and a delay in ms");
    }
    // Use setTimeout API
    setTimeout(callback, delay, text);
};

// Create some text string
const textToSay = "Hello world!";

// Use the timeout function with the printText callback
addTimeoutToPrint(printText, 2000, textToSay);
