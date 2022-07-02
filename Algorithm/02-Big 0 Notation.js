/*
In all interviews and in general we only focuses on worst case complexity
So we need to worry only about Big-O and not Theta and Omega.
And while calculating complexity we remove minure values
*/
//---------------------TIME COMPLEXITY----------------------------------
//Big-O time complexity of below program: Liner Time Complexity
function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/*
The above function will return sum of first n natural number:
for eg: n =4 returns 1+2+3+4=10
To calculate:
We need to calculate number of times a statement executes based on input size.
--------------

So we have, 3 main statements , Line 8,10,12. For loop is just line 10 executing multiple times
If we pass n=4,
then,
Line 8 will execute 1 time,
Line 10 will execute 4 times
Line 12 will execute 1 times.

So, the total is 4+2 or n+2 (as n is 4), So if we pass 8 in n, Total run is 8+2.
As we increase n to 1000000000 then time complexity will be 1000000000+2,
So, if n = infinity , then inifinity+2 ,We can remove +2 as it doesn't make a lot changes


So, worst case complexity or Big-O is O(n) also known as linear time complexity
As the size of input increase, complexity also increases
*/
//------------------------------------------Constant Time Complexity
function sum2(n) {
  return (n * (n + 1)) / 2;
}
/*
For above, time complexity is O(1),as whatever value of n is, it always runs 1 time
*/
//------------------------------------------Quadric Time Complexity
function sum3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
  }
}
/*
Lets say , n=4 -> First loop runs 4 times, inner loop runs 10 times
For above, first loop has O(n) complexity and whenever first runs, inner loop runs
also. Combining those will return 3n2 + 5n +1 . As we increase n to infinity we can
remove 5N+1, and left with O(nsquare)
*/
//------------------------------------------Cubic Time Complexity
function sum3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = 1; k <= j; k++) {
        console.log(j);
      }
    }
  }
}
// Here it is O(n cube)

//------------------------------------------Logrithmic Time Complexity
//If input size reduces to half on every iteration, then O notation is
//O(logn)

//---------------------SPACE COMPLEXITY----------------------------------
/*
The idea is same as time complexity.
If an algo does not need extra memory on each run the it is O(1) which is constant

1. O(1) constant eg: sorting algo that sort within array without using new variables
2. O(n) linear 
3. O(log n) Logarithmic
We deal with above only in space complexity, Quadric space complexity we need to avoid 
in real world as well as algos, as this will consume a lot of memory
*/
