'use strict';

import {displayTransactions} from './modules/displayTransactions.js';

const account1 = {
  userName: 'Дмитрий Николаев',
  transactions: [
    {
      date: '2021-11-13T11:48:50.942Z',
      sum: 500
    },
    {
      date: '2021-11-14T12:00:50.942Z',
      sum: 250
    },
    {
      date: '2021-12-01T14:12:50.942Z',
      sum: -300
    },
    {
      date: '2021-12-26T18:08:50.942Z',
      sum: 5000
    },
    {
      date: '2022-01-02T13:02:00.942Z',
      sum: -850
    },
    {
      date: '2022-01-26T13:08:50.942Z',
      sum: -110
    },
    {
      date: '2022-02-02T10:02:15.942Z',
      sum: -170
    },
    {
      date: '2022-02-26T14:08:50.942Z',
      sum: 1100
    }
  ],
  pin: 1111,
  summLoan: 0,

};

const account2 = {
  userName: 'Анна Смирнова',
  transactions: [
    {
      date: '2022-01-13T11:48:50.942Z',
      sum: 2000
    },
    {
      date: '2022-01-14T12:00:50.942Z',
      sum: 6400
    },
    {
      date: '2022-01-17T14:12:50.942Z',
      sum: -1350
    },
    {
      date: '2022-01-26T18:08:50.942Z',
      sum: -70
    },
    {
      date: '2022-02-02T13:02:00.942Z',
      sum: -210
    },
    {
      date: '2022-03-26T13:08:50.942Z',
      sum: -2000
    },
    {
      date: '2022-03-02T10:02:15.942Z',
      sum: 5500
    },
    {
      date: '2022-03-12T14:08:50.942Z',
      sum: -30
    }
  ],
  pin: 2222,
  summLoan: 0,
};

const account3 = {
  userName: 'Сергей Ковалев',
  transactions: [
    {
      date: '2021-12-13T11:48:50.942Z',
      sum: 900
    },
    {
      date: '2021-12-14T12:00:50.942Z',
      sum: -200
    },
    {
      date: '2021-12-01T14:12:50.942Z',
      sum: 280
    },
    {
      date: '2021-12-26T18:08:50.942Z',
      sum: 300
    },
    {
      date: '2022-01-02T13:02:00.942Z',
      sum: -200
    },
    {
      date: '2022-01-26T13:08:50.942Z',
      sum: 150
    },
    {
      date: '2022-02-02T10:02:15.942Z',
      sum: 1400
    },
    {
      date: '2022-03-02T14:08:50.942Z',
      sum: -400
    }
  ],
  pin: 3333,
  summLoan: 0,
};

const account4 = {
  userName: 'Елена Федорова',
  transactions: [
    {
      date: '2021-10-11T10:00:50.942Z',
      sum: 530
    },
    {
      date: '2021-11-14T15:00:50.942Z',
      sum: 1300
    },
    {
      date: '2021-11-25T14:12:50.942Z',
      sum: 500
    },
    {
      date: '2021-12-02T08:08:50.942Z',
      sum: 40
    },
    {
      date: '2022-01-23T19:02:00.942Z',
      sum: 190
    }
  ],
  pin: 4444,
  summLoan: 0,
};

const account5 = {
  userName: 'Андрей Иванов',
  transactions: [
    {
      date: '2022-02-01T06:40:50.942Z',
      sum: 630
    },
    {
      date: '2022-02-14T22:04:50.942Z',
      sum: 800
    },
    {
      date: '2022-02-01T14:12:50.942Z',
      sum: 300
    },
    {
      date: '2022-03-06T12:08:50.942Z',
      sum: 50
    },
    {
      date: '2022-03-10T13:02:00.942Z',
      sum: 120
    },
  ],
  pin: 5555,
  summLoan: 0,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');
const labelSummReturnLoan = document.querySelector('.summReturnLoan');
const containerApp = document.querySelector('.app-block');
const containerTransactions = document.querySelector('.transactions');

// const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const btnRegistration = document.querySelector('.button-registration');
const btnCloseModal = document.querySelector('.cancelbtn');
const btnUserRegister = document.querySelector('.signupbtn');
const btnEntry = document.querySelector('.button-entry');
const btnCancellation = document.querySelector('.entryCancelBtn');
const btnRegister = document.querySelector('.signupbtn');
const btnLoginEntry = document.querySelector('.entrySignupBtn');
const btnExit = document.querySelector('.btnExit');
const btnReturnLoan = document.querySelector('.btnReturnLoan');
const btnInfoLoan = document.querySelector('.btnInfoLoan');
const btnInfoСlose = document.querySelector('.btnInfoСlose');

const containerModal = document.querySelector('.modal');
const containerEntry = document.querySelector('.entry');
const containerRegistrationEntry = document.querySelector('.buttonNone');
const containerEmptyInput = document.querySelector('.empty-input');
const containerDifferentPasswords = document.querySelector('.different-passwords');
const containerEntryError = document.querySelector('.entryError');
const loanContainer = document.querySelector('.loanContainer');
const returnLoanContainer = document.querySelector('.returnLoan');
const maxloanContainer = document.querySelector('.maxLoan');
const infoLoanContainer = document.querySelector('.infoLoan');
const infoСloseContainer = document.querySelector('.infoСlose');
const closeContainer = document.querySelector('.closeContainer');
const errorInfoLoan = document.querySelector('.errorInfoLoan');

const inputUserNickName = document.querySelector('.userNickName');
const inputUserPassword = document.querySelector('.userPassword');
const inputUserPasswordRepeat = document.querySelector('.userPasswordRepeat');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const userNickName = document.querySelector('.userNickName');
const userPassword = document.querySelector('.userPassword');
const userPasswordRepeat = document.querySelector('.userPasswordRepeat');


btnRegistration.onclick = function() {  
  containerModal.classList.toggle('modalOpen');     
  containerEntry.classList.remove('modalOpen');
};

btnCloseModal.onclick = function() {    
  containerModal.classList.toggle('modalOpen');  
};


btnEntry.onclick = function() {    
  containerEntry.classList.toggle('modalOpen');     
  containerModal.classList.remove('modalOpen');
};  

btnCancellation.onclick = function() {    
  containerEntry.classList.toggle('modalOpen');
};
  
btnExit.onclick = function() {          
  containerApp.classList.toggle('modalOpen');
  containerRegistrationEntry.classList.remove('displayNone');
}        
 
let currentAccount;
let copyTransactions;
let timerId;

function depozitsorted() {
  currentAccount.sorted = !currentAccount.sorted
  const sortedTransactions = currentAccount.transactions.sort((a, b) => b.sum - a.sum)
  const value = currentAccount.sorted ? sortedTransactions : copyTransactions;
  containerTransactions.innerHTML = ''
  displayTransactions(value)
  if (timerId) {
    clearTimer(timerId)
  }
  timerId = setInterval(timer, 1000)
}

function displayBalace() {
  const balance = currentAccount.transactions.reduce((acc, b) => acc + b.sum, 0)  
  currentAccount.balance = balance;  
  labelBalance.innerHTML = `${balance}$` 
}

// function displayTransactions(array) {
//   array.forEach((item) => {    
//     if (item.sum === 0 ) {
//       containerTransactions.innerHTML += ''
//     } else {
//       const type = item.sum > 0 ? 'deposit' : 'withdrawal'
//       containerTransactions.innerHTML += `
//       <div class="transactions__row">
//       <div class="transactions__type transactions__type--${type}">
//         1 ${item.sum > 0 ? 'депозит' : 'вывод средств'}
//       </div>
//       <div class="transactions__date">${new Date(item.date).toLocaleDateString()}</div>
//       <div class="transactions__value">${item.sum}</div>
//     </div>`
//     };  
//   })
// };

function displayTotal() {
  const depositValue = currentAccount.transactions.filter((obj) => obj.sum > 0).reduce((acc, b) => acc + b.sum, 0)
  const widthdrawValue = currentAccount.transactions.filter((obj) => obj.sum < 0).reduce((acc, b) => acc + b.sum, 0)
  const Loan = currentAccount.summLoan;
  labelSumIn.innerHTML = `${depositValue}$` ;
  labelSumOut.innerHTML = `${widthdrawValue}$`;
};

function updateUI() {
  displayBalace()
  displayTransactions(currentAccount.transactions)
  displayTotal()
};

btnRegister.addEventListener('click', (e) => {  
  e.preventDefault()
  const registrationNickName = userNickName.value;
  const registrationPassword = userPassword.value;
  const registrationPasswordRepeat = userPasswordRepeat.value;   

if (registrationPassword === registrationPasswordRepeat) {
  const password = registrationPassword
  var account6 = {
    userName: registrationNickName,
    transactions: [
      {        
        date: '',
        sum: 0            
      },     
    ],
    pin: password,
    summLoan: 0,
  };
  accounts.push(account6)  
};

if ((registrationPassword !== registrationPasswordRepeat) && 
registrationPassword !== '' && registrationPasswordRepeat !== '')  {  
  containerDifferentPasswords.classList.add('modalOpen')
} ;

if(document.querySelector(".userNickName").value === '' || 
  document.querySelector(".userPassword").value === '' ||
  document.querySelector(".userPasswordRepeat").value === '') { 
  containerEmptyInput.classList.add('modalOpen'); 
};

if ((registrationPassword !== registrationPasswordRepeat) && 
registrationPassword !== '' && registrationPasswordRepeat !== '' &&
(document.querySelector(".userNickName").value !== ''))  {   
  containerDifferentPasswords.classList.add('modalOpen')
};

if((document.querySelector(".userNickName").value !== '') && 
(document.querySelector(".userPassword").value !== '') &&
(document.querySelector(".userPasswordRepeat").value !== '') &&
(registrationPassword === registrationPasswordRepeat) ) { 
  containerModal.classList.toggle('modalOpen');
  containerEntry.classList.add('modalOpen');
};
});

inputUserNickName.value = '';
  inputUserPassword.value = '';
  inputUserPasswordRepeat.value = '';    
  inputUserNickName.blur();
  inputUserPassword.blur();
  inputUserPasswordRepeat.blur();

btnLoginEntry.addEventListener('click', (e) => {
  e.preventDefault()
  const name = inputLoginUsername.value;
  currentAccount = accounts.find(el => el.userName === name)  

  if (currentAccount?.pin == +inputLoginPin.value) {
    containerRegistrationEntry.classList.add('displayNone');
    containerEntry.classList.toggle('modalOpen');
    containerApp.classList.toggle('modalOpen');
    inputLoginUsername.value = '';
    inputLoginPin.value = ''
    inputLoginPin.blur()
    labelWelcome.innerHTML = `Добро пожаловать, ${currentAccount.userName}`
    const date = new Date().toLocaleDateString();
    labelDate.innerHTML = date;    

    updateUI()
//     displayBalace();
// displayTransactions(array);
// displayTotal();
    copyTransactions = [...currentAccount.transactions]
    if (timerId) {
      clearTimer(timerId)
    }
    timerId = setInterval(timer, 1000)
    const InfoLoarBalance = currentAccount.balance;
    if (InfoLoarBalance === 0) {
      maxloanContainer.innerHTML = 5000;
    } else {
    maxloanContainer.innerHTML = (InfoLoarBalance / 100) * 10;
  }
  } else {    
    containerEntryError.classList.add('modalOpen')
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault()
  const recipientName = inputTransferTo.value;
  const transferAmount = inputTransferAmount.value;
  const recipientAccount = accounts.find(el => el.userName === recipientName)
  if (recipientAccount?.userName !== currentAccount.userName && transferAmount > 0 && transferAmount < currentAccount.balance) {
    const newTransfer = {
      date: new Date().toISOString(),
      sum: -transferAmount
    }
    currentAccount.transactions.push(newTransfer)
    copyTransactions = [...currentAccount.transactions]
    updateUI()
//     displayBalace();
// displayTransactions(array);
// displayTotal();
    depozitsorted()
    inputTransferTo.value = ''
    inputTransferAmount.value = ''
  } 
  
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault()
  const summLoan = inputLoanAmount.value
  console.log(summLoan);
  currentAccount.summLoan = summLoan;  
  const InfoBalance = currentAccount.balance;


if (InfoBalance > 0 && summLoan <= ((InfoBalance / 100) * 10) && summLoan !== '') {


      loanContainer.classList.add('displayNone');
      returnLoanContainer.classList.add('modalOpen');
      labelSummReturnLoan.innerHTML = `${summLoan}$`
    
      if (currentAccount.balance > 0 && summLoan !== '') {
        const newLoan = {
          date: new Date().toISOString(),
          sum: +summLoan
        }
        currentAccount.transactions.push(newLoan)
        copyTransactions = [...currentAccount.transactions]
        updateUI()
//         displayBalace();
// displayTransactions(array);
// displayTotal();
        depozitsorted()
        inputLoanAmount.value = ''    
      }
} 

if (InfoBalance > 0 && summLoan >= ((InfoBalance / 100) * 10) && summLoan !== '') { 

  loanContainer.classList.add('displayNone');
  infoLoanContainer.classList.add('modalOpen');
  depozitsorted()
   
} 

if (InfoBalance === 0 && summLoan <= 5000 && summLoan !== '') {

  loanContainer.classList.add('displayNone');
  returnLoanContainer.classList.add('modalOpen');
  labelSummReturnLoan.innerHTML = `${summLoan}$`

  if (currentAccount.balance == 0 && summLoan !== '') {
    const newLoan = {
      date: new Date().toISOString(),
      sum: +summLoan
    }
    currentAccount.transactions.push(newLoan)
    copyTransactions = [...currentAccount.transactions]
    updateUI()
//     displayBalace();
// displayTransactions(array);
// displayTotal();
    inputLoanAmount.value = ''    
  } 
  depozitsorted()
  // if (timerId) {
  //   clearTimer(timerId)
  // }
  // timerId = setInterval(timer, 1000)      

}

if (InfoBalance === 0 && summLoan > 5000 && summLoan !== '') { 
  errorInfoLoan.innerHTML = 'Новым пользователям доступна максимальная сумма займа 5000$';
  loanContainer.classList.add('displayNone');
  infoLoanContainer.classList.add('modalOpen');
  depozitsorted();
  inputLoanAmount.value = '';
  // if (timerId) {
  //   clearTimer(timerId)
  // }
  // timerId = setInterval(timer, 1000)  
} 

} );

btnInfoLoan.addEventListener('click', (e) => {
  e.preventDefault()  
  infoLoanContainer.classList.remove('modalOpen');
  loanContainer.classList.remove('displayNone');
  depozitsorted();
  inputLoanAmount.value = ''
  // if (timerId) {
  //   clearTimer(timerId)
  // }
  // timerId = setInterval(timer, 1000)
})

btnReturnLoan.addEventListener('click', (e) => {
  e.preventDefault()
  loanContainer.classList.remove('displayNone');
  returnLoanContainer.classList.remove('modalOpen');

  const ReturnLoan = currentAccount.summLoan;
  if (currentAccount.balance > 0) {
    const newReturnLoan = {
      date: new Date().toISOString(),
      sum: -ReturnLoan
    }
    currentAccount.transactions.push(newReturnLoan)
    copyTransactions = [...currentAccount.transactions]
    updateUI()
//     displayBalace();
// displayTransactions(array);
// displayTotal();
    depozitsorted()
    inputLoanAmount.value = ''
    currentAccount.summLoan = 0;
}
// if (timerId) {
//   clearTimer(timerId)
// }
// timerId = setInterval(timer, 1000)
})

btnClose.addEventListener('click', (e) => {
  e.preventDefault()
  const recipientName = inputCloseUsername.value;
  const recipientPin = inputClosePin.value;
  
      let search = recipientName;
      let pin = recipientPin;
      var i;
     for (i = 0; i < accounts.length; i++) {
         if (accounts[i].userName == search && accounts[i].pin == pin && currentAccount.summLoan === 0) {
         const v = i
         console.log(v);
             
             accounts.splice(v,1);
             
             containerApp.classList.toggle('modalOpen');
             containerRegistrationEntry.classList.remove('displayNone');            
          
            } else {
            closeContainer.classList.add('displayNone');
            infoСloseContainer.classList.add('modalOpen');
           }           
         }  
});

btnInfoСlose.addEventListener('click', (e) => {
  e.preventDefault()
  closeContainer.classList.remove('displayNone');
  infoСloseContainer.classList.remove('modalOpen');

  if (timerId) {
    clearTimer(timerId)
  }
  timerId = setInterval(timer, 1000)
});

btnSort.addEventListener('click', () => {
  depozitsorted()
});

let time = 300

function timerCallback() {

}

function timer() {
  const minutes = Math.trunc(time / 60);
  const seconds = Math.trunc(time % 60);

  labelTimer.innerHTML = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`
  console.log(time);
  if (time === 0) {
    clearInterval(timerId)    
    containerApp.classList.toggle('modalOpen');
    containerRegistrationEntry.classList.remove('displayNone');
  }
  time--
}

timer()


function clearTimer(id) {
  time = 300;
  clearInterval(id)
}

