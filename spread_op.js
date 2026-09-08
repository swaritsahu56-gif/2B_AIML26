function sum(...values) {
  let sum = 0;
  for (let i=0;i<values.length;i++) {
    sum += values[i];
  }
   console.log("sum:", sum);
};
 let numbers = [1, 2, 3, 4, 5];
sum(...numbers); 