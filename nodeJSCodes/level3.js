// 5️⃣ simulateDownload(file, callback)
// Simulate a download process:

// Print “Downloading <file>...”

// Wait for 2 seconds (use setTimeout)

// Then call the callback, which prints “Download complete for <file>”

let simulateDownload = (file, callback) => {
    console.log("Downloading...", file)
    setTimeout(() => {
    callback(file);
}, 2000);
}

let printStatus = (file) => {
 console.log("Download complete for " + file )
}

simulateDownload("shanto.png", printStatus);