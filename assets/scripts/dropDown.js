document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');


    dropDownBtn.addEventListener("click", function () {
        dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (event) {
            event.stopPropagation()
            dropDownBtn.innerText = this.innerText;
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownBtn.style.color = 'black';
        })
    });

    document.addEventListener('click', function (event) {
        if (event.target !== dropDownBtn) {
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownBtn.classList.remove('dropdown__button--active');
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab' || event.key === "Escape") {
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownBtn.classList.remove('dropdown__button--active');
        }
    });
});

