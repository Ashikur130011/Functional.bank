
function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    
    // clear input field
    inputField.value = '';
    
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if(isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
    
}

document.getElementById('deposit-button').addEventListener('click', function() {
    
    const depositAmount = getInputField('deposit-input');

    updateTotalField('deposit-total',depositAmount);

    updateBalance(depositAmount, true);

})

// WithDraw

    document.getElementById('withdraw-button').addEventListener('click',function() {
      
        const withdrawAmount = getInputField('withdraw-input');
        
        updateTotalField('withdraw-total', withdrawAmount);
      
        updateBalance(withdrawAmount, false);
    })