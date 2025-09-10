//task 1
function SolveThis(obj) {
    let res = {};

    for (let key in obj) {
        let value = obj[key];

        switch (key) {
            case "sum":
                res[key] = value.reduce((a, b) => a + b, 0);
                break;
            case "max":
                res[key] = Math.max(...value);
                break;
            case "min":
                res[key] = Math.min(...value);
                break;
            case "round":
                res[key] = value.map(v => Math.round(v));
                break;
            case "abs":
                res[key] = value.map(v => Math.abs(v));
                break;
            case "ceil":
                res[key] = value.map(v => Math.ceil(v));
                break;
            case "floor":
                res[key] = value.map(v => Math.floor(v));
                break;
            case "random":
                res[key] = Math.random();
                break;
            default:
                res[key] = "Invalid operation";
        }
    }

    return res;
}


console.log(
    SolveThis({
        sum: [3, 2, 4],
        max: [2, 4, 3, 5],
        min: [5, 3, 4, 3]
    })
);
// task 2
function add(a, b) {
    if (a === undefined) a = 0;
    if (b === undefined) b = 0;
    return a + b;
}

function subtract(a = 0, b = 0) {
    return a - b;
}

function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

function divide() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}


console.log("Add:", add(5));            
console.log("Subtract:", subtract(10)); 
console.log("Multiply:", multiply(2, 3, 4)); 
console.log("Divide:", divide(100, 2, 5));   
