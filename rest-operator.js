// function sum (...values) {
//   console.log(values);

// }
// sum(1,2,3,4,5,6,7,8,9,10);
// sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,150000);
function sum (...values) {
    let total = 0;

    for (let i = 0; i < values.length; i++) {

        total += values[i];

    }

 return total;}
console.log(sum(1,2,3,4,5,69999,7,8,966666,1000));