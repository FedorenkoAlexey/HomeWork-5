//1. isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(n) {
	let res = 0;
	if (n <= 1) return console.log(n, false);
	for (let i = 2; i <= n-1; i++){
		res = n % i;
//		console.log(n, i);
		if (res == 0) return console.log(n, false);
		else if (n ==2 || res !=0){
			let positive = true;
		} 
	}
	if (positive = true) console.log(n, positive);
}

isPrime(9999991);

//2. factorial - Returns a number that is the factorial of the given number.
function factorial(val){
	let res = 1;
	for (let i = 1; i <= val; i++){
		res *= i;
	}
	return console.log(`factorial ${val}: ${res}`);
}

factorial(6);

//3. fib - Returns the nth Fibonacci number.
function fib(n) {
  let res = [0, 1];
  for (let i = 0; i < n; i++) {
    let sum;
    sum = res[i] + res[i + 1];
    res.push(sum);
  }
  console.log(`${n}-th Fibonacci number: ${res[n]}`);
}
fib(0);
fib(1);
fib(10);
fib(20);

//4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
  let iter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let newMax = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = newMax;
        iter += 1;
//         console.log(iter);
      }
    }

  }
	if (iter == 0) console.log(true);
    else console.log(false); 
}

isSorted([9, 3, 0, -Infinity, -5]);
isSorted([-Infinity, -5, 0, 3, 9]);

//5. reverse - Reverses the given string
function reverse(str) {
  let res = [];
  const arr = str.split("");
  for (let i = 0; i <= arr.length - 1; i++) {
    res.unshift(arr[i]);
  }
  let res2 = res.join("");

  console.log(`reverse for ${str}: ${res2}`);
}
reverse("Hello world");

//6. indexOf - Implement the indexOf function for arrays.
function indexOf(arr, i){
	arr.forEach(function(item, index){
		if (item == i) console.log(`For array ${arr} elem "${item}" - index: ${index}`);
	})
}
indexOf([1, 3, 5, 8, 9, 10, 7], 8);

//7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive)

// 8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, 
//and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). 
//Can you do it in O(N) time? Hint: There’s a clever formula you can use.

//9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.