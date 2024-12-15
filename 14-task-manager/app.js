// ****** select items **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementId('grocey');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//edit option

let editElement;
let editFlag = false;
let editId;

// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item to list
const addItem = e => {
    e.preventDefault();
};

// clear items
const clearItems = () => {
    list.innerHTML = '';
};

//delete item
const deleteItem = e => {
    e.preventDefault();
    const target = e.target;
    const id = target.getAttribute('data-id');
    const item = document.querySelector(`[data-id="${id}"]`);
    item.remove();
};

// edit item
const editItem = e => {
    e.preventDefault();
    const target = e.target;
    const id = target.getAttribute('data-id');
    editElement = document.querySelector(`[data-id="${id}"]`);
    editFlag = true;
    editId = id;
};

// set backt to default
const setBackToDefault = () => {
    editElement.innerHTML = editElement.getAttribute('data-default');
    editFlag = false;
};