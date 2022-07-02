/*
Ques: How we can check which algorithm is efficient and which is not?
Ans: To analyze this, we have time & space complexity which provides us
with the answer which algo is most efficient and which is not

We can't predict how much time a algo will take, as it depends on OS, programming lang.
different task running at same time.
So, we evaluate an algo on basis of it's input size



Time Complexity : Amount of time taken by algo to run, as a function of input size

Space Complexity : Amount of space/memory taken by algo to run, as a func. of input size


We use input size, because it makes our algo independent of OS and other factors, and 
assume if a algo is faster as small input size but slower when input size increases.
*/

/*
So if your application needs to be quick but has a lot of memory to work with, just focus on
time complexity. and vice versa
*/
//----------------------------------------------------------
//HOW TO REPRESENT TIME/SPACE COMPLEXITY
/*
We use Asymptotic notations:
1. Big O notation - For worst case complexity
2. Omega notation - fot best case
3. Theta notation - for average
*/
