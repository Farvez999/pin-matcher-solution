function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // display Pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

//calculator number type
document.getElementById('calculator').addEventListener('click', function (event) {
    const char = event.target.innerText;
    const typedCharField = document.getElementById('typed-number');
    const previousTypedChar = typedCharField.value;

    if (isNaN(char)) {
        if (char == 'C') {
            typedCharField.value = '';
        }
        else if (char === '<') {
            const disit = previousTypedChar.split('');
            disit.pop();
            const remainingDisit = disit.join('');
            typedCharField.value = remainingDisit;
        }
    }
    else {
        const newTypeChar = previousTypedChar + char;
        typedCharField.value = newTypeChar;
    }
})

// Submit Button Click and verify
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-number');
    const typenumber = typeNumberField.value;


    const pinSuccessMsg = document.getElementById('pin-success');
    const pinFailedMsg = document.getElementById('pin-failed');
    if (currentPin == typenumber) {
        pinSuccessMsg.style.display = 'block';
        pinFailedMsg.style.display = 'none';
    }
    else {
        pinFailedMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
})