let theForm = document.querySelector('form');
let inputField = document.querySelector('input');
let list = document.querySelector('ul');

list.innerHTML = getList();

addEventClick();

theForm.addEventListener('submit', (e) => {
    list.innerHTML += '<li>' + inputField.value + '<span style="text-decoration-line: none;" class="btnRemove">X</span></li>';
    setList( list.innerHTML );
    inputField.value = '';
    addEventClick();
    e.preventDefault();
});

function getList() {
    return localStorage.getItem("list");
}

function setList( list ) {
    localStorage.setItem( 'list', list );
    return ''
}

function addEventClick() {
    let currentList = document.querySelectorAll('li');
    currentList.forEach((value) => {
        value.addEventListener('click', function () {
            value.classList.toggle('done');
            setList( list.innerHTML );
        })
    })
    currentList = document.querySelectorAll('.btnRemove');
    currentList.forEach( (value) => {
        value.addEventListener('click', function (e) {
            value.parentElement.remove();
            setList( list.innerHTML );
        })
    })
}