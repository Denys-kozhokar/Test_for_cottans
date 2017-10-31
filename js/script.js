var input = document.getElementsByClassName('pin'),
	numberButtons = document.getElementsByClassName('js-number'),
	cancelButton = document.getElementsByClassName('js-cancel'),
	clearButton = document.getElementsByClassName('js-clear'),
	enterButton = document.getElementsByClassName('js-enter'),
    hideButton = document.getElementsByClassName('js-hide');


cancelButton[0].addEventListener("click", dellNumber);

clearButton[0].addEventListener("click", clearInput);

enterButton[0].addEventListener("click", enterNumbers);

hideButton[0].addEventListener("click", hideShowNumbers);

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", addNumber);
}


document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (true) {
      case evt.keyCode == 27:
        clearInput();
        break;
      case evt.keyCode == 13:
        enterNumbers()
        break;
      case evt.keyCode == 8:
        dellNumber();
        break;
      case (evt.keyCode>=48 && evt.keyCode<=57):
        addNumber(evt.keyCode);
        break;
    }
};


function addNumber(keyCode){
    if(input[0].value.length >= 4){
        return false;
    } else {
        if(keyCode > 0){
            input[0].value += keyCode-48;
        } else {
            var number = (this).getAttribute('data-number');
            input[0].value += number;
        }

        if(document.getElementById("sort_checkbox").checked){
            sortNumbers();
        }
    }
}

function dellNumber(){
    input[0].value = input[0].value.slice(0,-1);
}

function clearInput() {
    input[0].value = '';
}

function enterNumbers() {
    if(input[0].value.length >= 4){
       alert('PIN: ' + input[0].value);
    } else {
        alert('You should enter 4 numbers!');
    }
}

function hideShowNumbers(){
    if(input[0].getAttribute('type') == 'text') {
        input[0].setAttribute('type', 'password');
        hideButton[0].innerHTML = 'Show';
    } else {
        input[0].setAttribute('type', 'text');
        hideButton[0].innerHTML = 'Hide';
    }
}

function sortNumbers(){
    var arr = [1,2,3,4,5,6,7,8,9,11];

    arr.sort(compareRandom);

    for (var i = 0; i < numberButtons.length; i++) {
      numberButtons[i].style.order = arr[i];
    }
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}


