const listFields = document.querySelectorAll('.list__item');
const figuresList = ['circle', 'parallelogram', 'square', 'rhombus'];
const dropDown = document.querySelector('.dropdown');
const figure = document.querySelector('.dropdown__input-hidden');
const dropDownListItems = dropDown.querySelectorAll('.dropdown__item');
let listInputs = [];
const button = document.querySelector('.btn');
let result

listFields.forEach(function (elem){
    if (elem.querySelector('.item__place-input').querySelector('.input')) {
        listInputs.push(elem);
    }
});

listInputs.forEach(function (elem) {
    if (!elem.querySelector('.dropdown')) {
        elem.style.visibility = 'hidden';
    }
});

dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (event) {
        listInputs.forEach(function (elem) {
            if (!elem.querySelector('.dropdown')) {
                elem.querySelector('.item__place-input').querySelector('.input').value = '';
                elem.style.visibility = 'hidden';
            }
        });
        selectArea(figure);
    })
});

button.addEventListener('click', function (event) {
    result = getResult();
    console.log(result);
    listInputs.forEach(function (elem) {
        if (!elem.querySelector('.dropdown')) {
            elem.style.visibility = 'hidden';
        }
    });

    let elem = listInputs[0];
    let elemInput = elem.querySelector('.item__place-input').querySelector('.input');
    let elemName = elem.querySelector('.item__title');
    elemName.innerText = "Результат";
    elemInput.placeholder = '';
    elemInput.value = result;

    elem.style.visibility = 'visible';
});

function selectArea(figure) {
    let elem = listInputs[0];
    let elemInput = elem.querySelector('.item__place-input').querySelector('.input');
    let elemName = elem.querySelector('.item__title');
    switch (figure.value) {
        case 'circle':
            if (elemInput.id === "first-input") {
                elemName.innerText = "Радиус";
                elemInput.placeholder = "Введите радиус"
            }
            elem.style.visibility = 'visible';
            break;

        case 'parallelogram':
            listInputs.forEach(function (elem) {
                let elemInput = elem.querySelector('.item__place-input').querySelector('.input');
                let elemName = elem.querySelector('.item__title')
                if (elemInput.id === "first-input") {
                    elemName.innerText = "Сторона";
                    elemInput.placeholder = "Введите сторону"
                } else {
                    elemName.innerText = "Высота";
                    elemInput.placeholder = "Введите высоту"
                }
                elem.style.visibility = 'visible';
            });
            break;

        case 'square':
            if (elemInput.id === "first-input") {
                elemName.innerText = "Сторона";
                elemInput.placeholder = "Введите сторону"
            }
            elem.style.visibility = 'visible';
            break;

        case 'rhombus':
            listInputs.forEach(function (elem) {
                let elemInput = elem.querySelector('.item__place-input').querySelector('.input');
                let elemName = elem.querySelector('.item__title')
                if (elemInput.id === "first-input") {
                    elemName.innerText = "Диагональ 1";
                    elemInput.placeholder = "Введите диагональ"
                } else {
                    elemName.innerText = "Диагональ 2";
                    elemInput.placeholder = "Введите диагональ"
                }
                elem.style.visibility = 'visible';
            });
            break;
    }
}

function getResult() {
    const firstInput = Number(listInputs[0].querySelector('.item__place-input').querySelector('.input').value);
    const secondInput = Number(listInputs[1].querySelector('.item__place-input').querySelector('.input').value);
    let result

    switch (figure.value) {
        case 'circle':
            result = Math.PI * firstInput**2;
            break;
        case 'parallelogram':
            result = firstInput * secondInput;
            break;
        case 'square':
            result = firstInput * firstInput;
            break;
        case 'rhombus':
            result = 1/2 * firstInput * secondInput;
            break;
    }
    return (result);
}