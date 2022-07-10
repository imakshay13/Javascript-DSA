/*
Problem statement:
Given a number n, find the first n elements of fibonacci sequences

Fibonacci sequence : a sequence in which each number is sum of preceding ones, first 
two numbers are always 0 and 1 and then goes to nth
fibonacci(7) : 0 1 1 2 3 5 8
fibonacci(2) : 0 1 
*/

function fibonacci(n) {
  let arr = [];
  let first = 0;
  let second = 1;
  for (let i = 1; i <= n; i++) {
    arr.push(first);
    nextTerm = first + second;
    first = second;
    second = nextTerm;
  }
  return arr;
}
console.log(fibonacci(1)); //[0]

//Time complexity : O(n) as it has single loop and it will run till it cover all n
