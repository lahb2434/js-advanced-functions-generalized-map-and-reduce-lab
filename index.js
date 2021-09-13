// Add your functions here
function mapToNegativize(sourceArray, func) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(func(sourceArray[i]))
    }
    return newArray
}