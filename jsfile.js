const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display = "block";
})


// deposit Handler

const addDeposit = document.getElementById("add-deposit")
addDeposit.addEventListener("click", function() {
    /*
    const inputDeposit = document.getElementById("add-input-number").value;
    const inputDepositNumber = parseFloat(inputDeposit);
    */
    const inputDepositNumber = getInputNumber("add-input-number");


    /*
    const depositAmount = document.getElementById("deposit-amount").innerText;
    const depositAmountNumber = parseFloat(depositAmount);
    const totalDeposit = inputDepositNumber + depositAmountNumber;
    document.getElementById("deposit-amount").innerText = totalDeposit;
    */
    updateAmount("deposit-amount", inputDepositNumber)


    /*
    const depositBalance = document.getElementById("deposit-balance").innerText;
    const depositBalanceNumber = parseFloat(depositBalance);
    const totalBalance = inputDepositNumber + depositBalanceNumber;
    document.getElementById("deposit-balance").innerText = totalBalance;
    */
    updateAmount("deposit-balance", inputDepositNumber)



    document.getElementById("add-input-number").value = "";

})

// withdraw handler 

const withdrawBtn = document.getElementById("withdraw-btn")
withdrawBtn.addEventListener("click", function() {
    /*
    const addInputWithdraw = document.getElementById("add-input-withdraw").value;
    const withdrawNumber = parseFloat(addInputWithdraw);
    */
    const withdrawNumber = getInputNumber("add-input-withdraw");

    /*
    const withdrawAmount = document.getElementById("withdraw-amount").innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const totalWithdraw = withdrawNumber + withdrawAmountNumber;
    document.getElementById("withdraw-amount").innerText = totalWithdraw;
    */
    updateAmount("withdraw-amount", withdrawNumber)
    updateAmount("deposit-balance", -1 * withdrawNumber)

    document.getElementById("add-input-withdraw").value = "";

})


function getInputNumber(id) {
    const addInput = document.getElementById(id).value;
    const inputNumber = parseFloat(addInput);
    return inputNumber;
}

function updateAmount(id, inputDepositNumber) {
    const depositBalance = document.getElementById(id).innerText;
    const depositBalanceNumber = parseFloat(depositBalance);

    const totalBalance = inputDepositNumber + depositBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}