// Add your functions here
function map(sourceArray, func) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(func(sourceArray[i]))
    }
    return newArray
}

// function reduce(sourceArray, startingPoint) {
//     let start = startingPoint;
// }

function reduce(sourceArray, func, startingValue){
    let start = !!startingValue ? startingValue : sourceArray[0]
    let i = !!startingValue ? 0 : 1
    for (; i < sourceArray.length; i++){
        start = func(sourceArray[i], start)
    }
    return start
}