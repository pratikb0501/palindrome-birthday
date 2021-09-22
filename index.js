const dob = document.getElementById("input--dob");
const num = document.getElementById("input--number")
const checkBtn = document.getElementById("btn--check");
const error = document.getElementById("error--msg")

const showError = (message) => {
    error.innerText = message;
    error.style.display = "block"
}

const hideError = () => {
    error.style.display = "none"
}

const calculateSum = (dob) => {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (i = 0; i < dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    return sum;
}

const compareValues = (sum, luckyNum) => {
    if (sum % luckyNum == 0) {
        showError("Yaay, your birth date is lucky!!🎉");
    } else {
        showError("Oops, not lucky enough 😪");
    }
};



checkBtn.addEventListener("click", () => {
    let dateOfBirth = dob.value;
    let number = num.value;
    if (!dateOfBirth) {
        showError("Please valid correct date of birth")
        return;
    }
    if (!number || number < 0) {
        showError("Please enter number greater than 0")
        return;
    }
    if (number % 1 != 0) {
        showError("Please enter a round number")
        return;
    }
    else {
        const sum = calculateSum(dateOfBirth);
        compareValues(sum, number)
    }

})