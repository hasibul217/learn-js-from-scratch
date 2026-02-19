console.log ("after a long time");

function displaySum (sum){
    console.log (sum)
}

function calculateSum (num1, num2, callback){
    let sum = num1 + num2;

    if (callback)
    callback(sum);
}

calculateSum(10, 20, displaySum);


