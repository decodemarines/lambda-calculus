// JavaScript program to find sum of array
// elements using recursion.
 
// Return sum of elements in A[0..N-1]
// using recursion.
function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
 
// Driver code
 
let A = [1, 2, 3, 4, 5];
let N = A.length;
findSum(A, N)