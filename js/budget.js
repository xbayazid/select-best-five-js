function findInput(idName) {
    const idCostField = document.getElementById(idName);
    const idCostString = idCostField.value;
    const idCost = parseInt(idCostString);
    return idCost;
}

function setExpense(idName,expense) {
    const playerExpenceField = document.getElementById(idName);
    playerExpenceField.innerText = expense;
}

function playerExpence() {
    const playerCost = findInput('player-cost');
    const playerExpense = playerCost * 5;
    setExpense('player-expence', playerExpense);
    return playerExpense;
}

function totalExpenseCalaulate(){
    const managerExpense = findInput('manager-cost');
    const coachExpense = findInput('coach-cost');
    const playerExpense = playerExpence();

    const totalExpense = playerExpense + managerExpense + coachExpense;

    setExpense('total-expense', totalExpense);
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    playerExpence();
});

document.getElementById('btn-total-calculate').addEventListener('click', function(){
    totalExpenseCalaulate();
})