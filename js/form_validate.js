document.getElementById('submit').addEventListener('click', function(e){
    let nameField = document.getElementById('name');
    let nameFieldValue = nameField.value;
    if (containsLettersOnly(nameFieldValue) && isLengthInRange(nameFieldValue, 1, 100)){
        nameField.className = "ok";
    } else {
        nameField.className = "error";
    };

    let adress1Field = document.getElementById('adress1');
    let adress1FieldValue = adress1Field.value;
    if (containsLettersAndNumbers(adress1FieldValue) && isLengthInRange(nameFieldValue, 1, 100)) {
        adress1Field.className = "ok";
    } else {
        adress1Field.className = "error";
    };
   
    let adress2Field = document.getElementById('adress2');
    let adress2FieldValue = adress2Field.value;
    if (containsLettersAndNumbers(adress2FieldValue) && isLengthInRange(nameFieldValue, 0, 100)) {
        adress2Field.className = "ok";
    } else {
        adress2Field.className = "error";
    };
   
    let cityField = document.getElementById('adress1');
    let cityFieldValue = adress1Field.value;
    if (containsLettersAndNumbers(cityFieldValue) && isLengthInRange(cityFieldValue, 1, 50)) {
        cityField.className = "ok";
    } else {
        cityField.className = "error";
    };
   
    
    let stateField = document.getElementById('state');
    let stateFieldValue = stateField.value;
    if (containsLettersOnly(stateFieldValue) && isLengthInRange(stateFieldValue, 2, 2)) {
        stateField.className = "ok";
    } else {
        stateField.className = "error";
    };

    let zipcodeField = document.getElementById('zipcode');
    let zipcodeFieldValue = zipcodeField.value;
    if (isNumeric(zipcodeFieldValue) && isLengthInRange(zipcodeFieldValue, 5, 5)) {
        zipcodeField.className = "ok";
    } else {
        zipcodeField.className = "error";
    };
   
   });

function isLetter(c) {
    return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
}

function containsLettersOnly(text) {
    for (let i = 0; i < text.length; i++) {
        if (!isLetter(text[i])) {
            return false;
        }
    }

    return true;
}

function containsLettersAndNumbers(text) {
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        let isDigit = c >= '0' && c <= '9';
        if (!(isLetter(c) || isDigit || c == " ")) {
            return false;
        }
    }

    return true;
}

function isLengthInRange(text, min, max) {
    return text.length >= min && text.length <= max;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}




document.getElementById('reset').addEventListener('click', function(e){
    resetField('name');
    resetField('adress1');
    resetField('adress2');
    resetField('city');
    resetField('state');
    resetField('zipcode');
});

function resetField(id) {
    let field =  document.getElementById(id);
    field.value = "";
    field.className = "ok";
}