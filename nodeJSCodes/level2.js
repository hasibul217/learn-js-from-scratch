// 3️⃣ Transform Text
// Write a function processText(text, callback) that:

// Converts the text to lowercase.

// Passes it to the callback, which then prints the text in uppercase.

console.log("Level 2");

let processText = (text, textCallbackFunc) => {
  let lowercaseText = text.toLowerCase();
  console.log(lowercaseText);
  textCallbackFunc(lowercaseText);
};

let makeUppercase = (lowercaseText) => {
    let uppercaseText = lowercaseText.toUpperCase();
    console.log(uppercaseText);
}

processText("MOTAMOTA", makeUppercase);


