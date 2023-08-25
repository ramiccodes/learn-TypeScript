// Functions
function add(n1, n2) {
    return n1 + n2;
}
// We can explicitly assign a return type by adding a colon after the paramters and the name of the type
function printResult(num) {
    console.log('The result is: ' + num);
}
printResult(add(9, 10));
