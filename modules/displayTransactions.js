const containerTransactions = document.querySelector('.transactions');

export function displayTransactions(array) {
  array.forEach((item) => {    
    if (item.sum === 0 ) {
      containerTransactions.innerHTML += ''
    } else {
      const type = item.sum > 0 ? 'deposit' : 'withdrawal'
      containerTransactions.innerHTML += `
      <div class="transactions__row">
      <div class="transactions__type transactions__type--${type}">
        1 ${item.sum > 0 ? 'депозит' : 'вывод средств'}
      </div>
      <div class="transactions__date">${new Date(item.date).toLocaleDateString()}</div>
      <div class="transactions__value">${item.sum}</div>
    </div>`
    };  
  })
};