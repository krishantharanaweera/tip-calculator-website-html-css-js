const btnEl = document.getElementById("generate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");

function calculate(){
    const billValue = billEl.value;
    const tipValue = tipEl.value;

    const totalValue = billValue * (1 + tipValue/100);

    totalEl.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click",calculate);