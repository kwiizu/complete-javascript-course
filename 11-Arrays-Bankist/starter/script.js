'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};

const createUserName = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
  // const userName = user.toLowerCase().split(' ').map((name) => {
  //   return name[0];

  // }).join('');
  // return userName;
};

createUserName(accounts);

const updateUI = acc => {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayPrintBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
  console.log('LOGIN');
};

// const movementsUSD = movements.map((mov) => {
//   return mov * eurToUsd;
// });

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.userName !== currentAccount.userName
  ) {
    console.log('Transfer valid');

    //doing the transfer
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
//last 2 element
console.log(arr.slice(-2));
//Always last element
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE (changes original array)
// console.log(arr.splice(2));
arr.splice(-1)
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - ')); */

/* const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

// getting last element
console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));
console.log(arr.at(-2)); */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
//   for (const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $ ${Math.abs(movement)}`);
//   }
// };

// console.log(`------FOREACH--------`);
// movements.forEach(function(movement, index, array){
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`you withdrew $ ${Math.abs(movement)}`);
//   }
// });

// console.log(`------FOREACH--------`);
// movements.forEach(function(mov, i, arr){
//   if(mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew $ ${Math.abs(mov)}`);
//   }
// });

/* const elf1 = [1000,1111,23]
let total = 0;
for (let index = 0; index < elf1.length; index++) {
  total=+elf1[index]
  
};

const calories = {
  elf1: [1,2,3],
  elf2: [3,4,5],

}
const elfTotal = []
Object.keys(calories).map((elf)=>{
  const elfCal = 0
  calories[elf].forEach(calories => {
    elfCal =+ calories
  }); 
  elfTotal.push(elfCal)
}) */

/* const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => {
  return mov * eurToUsd;
});


// const movementsUSD = movements.map(mov => mov * eurToUsd
// );

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) =>
`Movemenmt ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
  // if(mov > 0) {
  //       return `Movement ${i + 1}: You deposited ${mov}`;
  //     } else {
  //       return`Movement ${i + 1}: You withdrew $ ${Math.abs(mov)}`
  //     }

    console.log(movementsDescriptions); */

/* const deposits = movements.filter(function (mov){
      return mov > 0
    });
    
    console.log(movements);
    console.log(deposits);

    const depositFor = []
    for (const mov of movements) if (mov > 0) depositFor.push(mov);
    console.log(depositFor);

    const withdrawals = movements.filter((mov)=> {
      return mov < 0
    });

    console.log(withdrawals); */

// Accumulator => SNOWBALL
/* const balance = movements.reduce((acc, cur, i, arr) => {
      console.log(`Iteration ${i}: ${acc}`);
      return acc + cur;

    }, 0);

    console.log(balance); 

    let balance2 = 0;
    for (const mov of movements) {
      balance2 += mov
      
    };

    console.log(balance2); */

//Maximum value

/* const max = movements.reduce((acc,mov) => {
      if (acc > mov)
      return acc;

      else
      return mov;
    }, movements[0]); */

/* const max = movements.reduce((acc, mov) => {
     return acc > mov ? acc : mov;
    }, movements[0]);

    console.log(max); */

/*   const eurToUsd = 1.1;

    // PIPELINE
    const totalDepositInUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);

    console.log(totalDepositInUSD); */

/* const firstWithdrawal = movements.find(mov => mov < 0);

   console.log(movements);
   console.log(firstWithdrawal);

   console.log(accounts);

   const account = accounts.find(acc => acc.owner === 'Jessica Davis');
   console.log(account); */

/* console.log(movements);
console.log(movements.includes(-130));

//SOME: Condition
const anyDeposit = movements.some(mov => mov > 1500);
console.log(anyDeposit);

console.log(movements.some(mov => mov === -130));

//EVERY: Condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Seperate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));

//flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

//flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
 */

/* //Sort strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Sort Numbers

console.log(movements);
console.log(movements.sort());

//Return < 0, A, B
//Return > 0, B, A

//Ascending
movements.sort((a, b) => {
  if (a > b) return +1;

  if (b > a) return -1;
});

movements.sort((a, b) => a - b);

console.log(movements);

//Decending

console.log(movements.sort((a, b) => b - a)); */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = new Array(7);
console.log(x);

//Filling with 1 at index 3 end index 5
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

/* const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

console.log(movementsUI); */

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  /* console.log(movementsUI.map(el => Number(el.textContent.replace('€', '')))) */
});
//1

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

//2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// ++count

console.log(numDeposits1000);

//3

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//4
// this is a nice title => This Is a Nice Title
const convertTitleCase = title => {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);
  const execptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (execptions.includes(word) ? word : capitzalize(word)))
    .join(' ');
  return capitzalize(titleCase);
};

console.log(convertTitleCase('this i a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and there is another title with an example'));
