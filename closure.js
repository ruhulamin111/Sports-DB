// closure 
function sum() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const input1 = sum();
const input2 = sum();
console.log(input2())
console.log(input2())

console.log(input1())
console.log(input1())
console.log(input1())

