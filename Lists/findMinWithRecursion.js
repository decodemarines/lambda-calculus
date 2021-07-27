// https://www.geeksforgeeks.org/recursive-programs-to-find-minimum-and-maximum-elements-of-array/

// Javascript program to find minimum

// Function to print Minimum
// element using recursion
function findMinRec(A, n){
	
	// If size = 0 means whole
	// array has been traversed
	if (n == 1) return A[0];
		
	return Math.min(A[n - 1],
		findMinRec(A, n - 1));
}

// Driver Code
let A = [ 1, 4, 45, 6, -50, 10, 2 ];
let n = A.length;

document.write( findMinRec(A, n));

// This code is contributed by sravan kumar G


