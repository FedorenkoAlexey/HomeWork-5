//1. isPrime - Returns true or false, indicating whether the given number is prime.
console.log("--1. isPrime");
function isPrime(n) {
  let res = 0;
  if (n <= 1) return console.log(`${n}`, false);
  for (let i = 2; i <= n - 1; i++) {
    res = n % i;
    //		console.log(n, i);
    if (res === 0) return console.log(`${n}`, false);
    else if (n === 2 || res !== 0) {
      let positive = true;
    }
  }
  if ((positive = true)) console.log(`${n}`, positive);
}
isPrime(0); // false
isPrime(1); // false
isPrime(17); // true
isPrime(9999991); // true
isPrime(10000000000000); // false

//2. factorial - Returns a number that is the factorial of the given number.
console.log("--2. factorial");
function factorial(val) {
  let res = 1;
  for (let i = 1; i <= val; i++) {
    res *= i;
  }
  return console.log(`factorial ${val}: ${res}`);
}

factorial(6);

//3. fib - Returns the nth Fibonacci number.
console.log("--3. fib");
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
console.log("--4. isSorted");
function isSorted(array) {
  let iter = 0;
  let arr = array;
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
  if (iter === 0) console.log(`For array [${arr}]:`, true);
  else console.log(false);
}

isSorted([9, 3, 0, -Infinity, -5]);
isSorted([-Infinity, -5, 0, 3, 9]);

//5. reverse - Reverses the given string
console.log("--5. reverse");
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
console.log("--6. indexOf");
function indexOf(arr, i) {
  arr.forEach(function(item, index) {
    if (item === i)
      console.log(`For array [${arr}] elem "${item}" - index: ${index}`);
  });
}
indexOf([1, 3, 5, 8, 9, 10, 7], 8);

//7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive)
console.log("--7. isPalindrome");
function isPalindrome(str) {
  const string = str.toLocaleLowerCase();
  let res = "";
  let reversStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") continue;
    else res += string[i];
  }
  reversStr = res
    .split("")
    .reverse()
    .join("");
  console.log(`${str}:`, res === reversStr);
}
isPalindrome("abcba");

// 8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n,
//and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number).
//Can you do it in O(N) time? Hint: There’s a clever formula you can use.
console.log("--8. missing");
function missing(arr) {
  const sortArr = arr.sort();
  let und = 0;
  let res = 0;
  for (let i = 0; i < sortArr.length - 1; i++) {
    let res = sortArr[i + 1] - sortArr[i];
    if (res !== 1) console.log(`For array [${arr}] missing: ${sortArr[i] + 1}`);
    else und++;
  }
  if (und === arr.length || und === 0) console.log(undefined);
}
missing([5, 1, 4, 2]);

//9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
console.log("--9. isBalanced");
function isBalanced(str) {
  let sumLeft = 0;
  let sumRight = 0;
  let braceIndexLeft = 0;
  let braceIndexRight = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "{") {
      braceIndexLeft = i;
      sumLeft--;
      //			console.log(sumLeft, str[i], braceIndexLeft);
    } else if (str[i] === "}") {
      braceIndexRight = i;
      sumRight++;
      //			console.log(sumRight, str[i], braceIndexRight);
    }
  }
  //		console.log("Left", braceIndexLeft);
  //		console.log("Right", braceIndexRight);
  if (braceIndexLeft > braceIndexRight) return console.log(`'${str}':`, false);

  const sum = sumLeft + sumRight;

  if (sum === 0) console.log(`'${str}':`, true);
  else console.log(`'${str}':`, false);
}
isBalanced("}{"); // false
isBalanced("{{}"); // false
isBalanced("{}{}"); // true
isBalanced("foo { bar { baz } boo }"); // true
isBalanced("foo { bar { baz }"); // false
isBalanced("foo { bar } }"); // false
