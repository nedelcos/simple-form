const $ = jQuery;
const lettersSpaces = /^[a-zA-Z\s]+$/;
const lettersNumbers = /^[0-9a-z\\.\\_]+$/;
const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const fName = $('#fName');
const lName = $('#lName');
const uName = $('#uName');
const pWord = $('#pWord');
const eMail = $('#eMail');
var fNameVal;
let lNameVal;
let uNameVal;
let pWordVal;
let eMailVal;
const myForm = $('form[name="create-account"]');

function checkValidation(v) {
    if (v.val() === "") {
        v.next('small').empty();
        v.next('small').addClass('red').append('This field is required.');
        v.parent('.form-group').removeClass('correct').addClass('incorrect');
    }
    else if (v.val() !== "") {
        v.next('small').empty();
        var inputName = v.attr('id');
        switch (inputName) {
        case 'fName':
            if (!v.val().match(lettersSpaces)) {
                v.parent('.form-group').removeClass('correct');
                fName.addClass('incorrect');
                v.next('small').append('I guess you have a typo :) the name should only contain LETTERS');
            }
            else {
                v.parent('.form-group').removeClass('incorrect');
                v.parent('.form-group').addClass('correct');
                fNameVal = v.val();
                return true;
            }
            break;
        case 'lName':
            if (!v.val().match(lettersSpaces)) {
                v.parent('.form-group').removeClass('correct');
                fName.addClass('incorrect');
                v.next('small').append('I guess you have a typo :) the name should only contain LETTERS');
            }
            else {
                v.parent('.form-group').removeClass('incorrect');
                v.parent('.form-group').addClass('correct');
                lNameVal = v.val();
                return true;
            }
            break;
        case 'uName':
            if (!v.val().match(lettersNumbers)) {
                v.parent('.form-group').removeClass('correct');
                fName.addClass('incorrect');
                v.next('small').append('Your username can only contain small case letters, numbers, \".\" or \"_\" ');
            }
            else {
                v.parent('.form-group').removeClass('incorrect');
                v.parent('.form-group').addClass('correct');
                uNameVal = v.val();
                return true;
            }
            break;
        case 'pWord':
            if (v.val().length < 8) {
                v.parent('.form-group').removeClass('correct');
                fName.addClass('incorrect');
                v.next('small').append('Security is very important. Please choose a stronger password (min. 8 characters).');
            }
            else {
                v.parent('.form-group').removeClass('incorrect');
                v.parent('.form-group').addClass('correct');
                pWordVal = v.val();
                return true;
            }
            break;
        case 'eMail':
            if (!v.val().match(emailCheck)) {
                v.parent('.form-group').removeClass('correct');
                fName.addClass('incorrect');
                v.next('small').append('I guess you have a typo :) the e-mail format is not correct');
            }
            else {
                v.parent('.form-group').removeClass('incorrect');
                v.parent('.form-group').addClass('correct');
                eMailVal = v.val();
                return true;
            }
            break;
        }
    }
}

function validator() {
    checkValidation(fName);
    checkValidation(lName);
    checkValidation(uName);
    checkValidation(pWord);
    checkValidation(eMail);
    if (checkValidation(fName) && checkValidation(lName) && checkValidation(uName) && checkValidation(pWord) && checkValidation(eMail)) {
        let valuesArray = [fNameVal, lNameVal, uNameVal, pWordVal, eMailVal];
        let display = valuesArray.join(', ')
        alert(display);
    }
    else {
        return false;
    }
}
fName.blur(function () {
    checkValidation(fName);
});
lName.blur(function () {
    checkValidation(lName);
});
uName.blur(function () {
    checkValidation(uName);
});
pWord.blur(function () {
    checkValidation(pWord);
});
eMail.blur(function () {
    checkValidation(eMail);
});