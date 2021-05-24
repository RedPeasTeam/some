'use strict';

let isResulted = false;
let signCheck = true;
let textForm = document.form.textview;

const signList = ['-', '+', '/', '*'];
const buttonList = document.getElementsByClassName('buttonIns');
const clearBttn = document.getElementById('clear');
const backspaceBttn = document.getElementById('backspace');
const equalBttn = document.getElementById('equal');
const signInResList = document.getElementsByClassName('sign');

window.onload = () => {
    textForm.value = ''
};

[].forEach.call(buttonList, item => {
    item.addEventListener('click', () => {
        let context = item.firstChild.textContent;
        insert(context);
    });
});

clearBttn.addEventListener('click', () => {
    clear();
});

backspaceBttn.addEventListener('click', () => {
    backspace();
});

equalBttn.addEventListener('click', () => {
    result();
});

function insert(context) {
    if (!signList.includes(context) && !isResulted) {
        textForm.value += context;
        signCheck = true;
        isResulted = false;
    }
    if (signList.includes(context) && signCheck === true) {
        textForm.value += context;
        signCheck = false;
        isResulted = false;
    }
    if (!signList.includes(context) && isResulted) {
        textForm.value = context;
        isResulted = false;
    }
}

function clear() {
    textForm.value = "";
}

function backspace() {
    textForm.value = textForm.value.substring(0, textForm.value.length - 1);
}

function result() {
    let value = textForm.value;
    if (value) {
        textForm.value = eval(value);
        isResulted = true;
    }

    document.getElementById('exp3').innerText = document.getElementById('exp2').textContent;
    document.getElementById('exp2').innerText = document.getElementById('exp1').textContent;
    document.getElementById('exp1').innerText = value;

    document.getElementById('res3').innerText = document.getElementById('res2').textContent;
    document.getElementById('res2').innerText = document.getElementById('res1').textContent;
    document.getElementById('res1').innerText = textForm.value;

    signInResList[2].innerHTML = document.getElementById('res1').textContent !== '' ? '=' : '';
    signInResList[1].innerHTML = document.getElementById('res2').textContent !== '' ? '=' : '';
    signInResList[0].innerHTML = document.getElementById('res3').textContent !== '' ? '=' : '';

}