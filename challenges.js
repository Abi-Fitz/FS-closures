/*------------------
1) Incomplete
Create a function named "counter". It does
not have any parameters.

Create a variable named y, and create a
closure that increases y by 1 before 
returning y.

Test cases:
const counterOne = counter();
const counterTwo = counter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2
------------------*/
/*
function closureCounter() {
  let y = 0;
 function counter(numb) {
     numb += 1;
  }
    return counter;
}

const counterOne = closureCounter();
const counterTwo = closureCounter();
console.log(counterOne()); // 1
console.log(counterOne()); // 2
console.log(counterOne()); // 3
console.log(counterTwo()); // 1
console.log(counterTwo()); // 2



/*------------------
2)Done
Create a function named "startingCounter".
It takes in one parameter, a number (x).

Store x in a variable named count, and return
a closure that increases count by 1 before
returning count.

Test cases:
const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); // 11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); // 5
------------------*/
/*
function startingCounter(x){
  let count = x;
 return function increaseCount(){
  count++

  return count;
 }
 return increaseCount;
}

const counterThree = startingCounter(10);
const counterFour = startingCounter(3);
console.log(counterThree()); // 11
console.log(counterThree()); // 12
console.log(counterThree()); // 13
console.log(counterFour()); // 4
console.log(counterFour()); // 5

/*------------------
3) Done! I did it!
Create a function named "countdown". It takes
in one parameter, a number (x). Store x
in a variable called count.

Return a closure that decreases count by 1,
and then returns either the count (if
the count is greater than or equal to one)
or "Time's Up!" (if the count is zero or less).

const counterFive = countdown(3);
console.log(counterFive()); // 2
console.log(counterFive()); // 1
console.log(counterFive()); // "Time's up!"
console.log(counterFive()); // "Time's up!"
------------------*/
/*
function countDown(x) {
  let count = x;
   return function decreasedCount() {
    count -= 1;
    return count >=1 ? `${count}` : "Time's up!";
  }
  //return decreasedCount;
}
const counterFive = countDown(3);
console.log(counterFive()); // 2
console.log(counterFive()); // 1
console.log(counterFive()); // "Time's up!"
console.log(counterFive()); // "Time's up!"

/*------------------
4) Done!
Create a function named "multiplier"
that takes in a number (x).

The multiplier function should return a
closure that takes another number (y) as a parameter.
That closure should return the result of x * y.

Test cases:
const multiplyByFive = multiplier(5);
const multiplyByFive = multiplier(10);
console.log(multiplyByFive(4)); // 20
console.log(multiplyByTen(4)); // 40
------------------*/
/*
function multiplier(x) {
  //let x = x * y;
  return function newMultiplier(y) {
    return x * y; 
  }
}
const multiplyByFive = multiplier(5);
const multiplyByTen = multiplier(10);
console.log(multiplyByFive(4)); // 20
console.log(multiplyByTen(4)); // 40

/*------------------
5) I'm on a roll! :)
Create a function named "createPassword"
that takes in a string (x).

The createPassword function should return a
closure that takes another string (y) as a parameter.
If that x is equal to y, the closure should
return "Password correct". If not, the closure
should return "Password incorrect".

Test cases:
const password = createPassword("123pass!");
console.log(password("123pass!")); // Password correct.
console.log(password("123pass")); // Password incorrect.
------------------*/
/*
function createPassword(x) {
  let password = x;
  return function passwordInput(y) {
    return y === password ? 'Password correct.' : 'Password incorrect.'
  }
}
const password = createPassword("123pass!");
console.log(password("123pass!")); // Password correct.
console.log(password("123pass")); // Password incorrect.

/*------------------
6)
Create a function named "createBankAccount"
that takes in a number (x). That number x
should be stored in a variable called "balance".

The createBankAccount function should return a
closure with two parameters– a number (y) and 
a string (name it "action").

If the action is equal to "add", y should be added
to balance. If the action is equal to "subtract", y should
be subtracted from balance.

The closure should return balance. 

Test cases:
const marcoAccount = createBankAccount(100);
console.log(marcoAccount(50, "add")); // 150
console.log(marcoAccount(10, "add")); // 160
console.log(marcoAccount(70, "subtract")); // 90
------------------*/
/* Incomplete
function createBankAccount(x) {
  let startingBalance = x;
  return function remainingBalance(y, action) {
    let add =+ y;
    let subtract =- y;
    return y === remainingBalance ? `${y} + ${balance}` : `${balance} - ${y}`;
  } 
  
  
}
const marcoAccount = createBankAccount(100);
console.log(marcoAccount(50, "add")); // 150
console.log(marcoAccount(10, "add")); // 160
console.log(marcoAccount(70, "subtract")); // 90


/*------------------
7)
The function below uses the other functions you
created to make a secure account. Modify the conditional
in the if statement so that it evaluates to true. Then, 
use the bank account function so that money is added
or subtracted from the account.

This closure should return the bank account balance.

Look back at the other functions you created to make sure
you understand how they work!
------------------*/


function createBank(password, startingBalance) {
  const checkPassword = createPassword(password);
  const bankAccount = createBankAccount(startingBalance);

  return function(password, amount, action) {
    let access = checkPassword(password);

    if (access === "CHANGE THIS TEXT") {
      // use your bankAccount function
      // to add or subtract money here
    } else {
      return access;
    }
  }
}

// const sofiaBank = createBank("Cod3ly!", 100);
// console.log(sofiaBank("Cod3ly!", 150, "add")); //250
// console.log(sofiaBank("Codely123", 150, "add")); //Password incorrect
// console.log(sofiaBank("Cod3ly!", 50, "subtract")); //200

