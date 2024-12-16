// ****** select items **********

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById("grocery");
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
function addItem(e) {
    e.preventDefault();
    const value = grocery.value.trim(); // Eliminar espacios en blanco
    const id = Date.now().toString(); // Usar Date.now() para obtener un timestamp
  
    if (value === "") {
      return displayAlert("please enter value", "danger");
    }
  
    const element = document.createElement("article");
    element.setAttribute("data-id", editFlag ? editID : id);
    element.classList.add("grocery-item");
    element.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    `;
  
    // Agregar event listeners a los botones
    element.querySelector(".delete-btn").addEventListener("click", deleteItem);
    element.querySelector(".edit-btn").addEventListener("click", editItem);
  
    if (editFlag) {
      editElement.innerHTML = value; // Actualizar el elemento editado
      displayAlert("value changed", "success");
      editLocalStorage(editID, value); // Editar en local storage
    } else {
      list.appendChild(element); // Agregar el nuevo elemento a la lista
      displayAlert("item added to the list", "success");
      container.classList.add("show-container");
      addToLocalStorage(id, value); // Agregar a local storage
    }
  
    setBackToDefault(); // Restablecer el formulario
};

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.className = `alert-${action}`;
    // remove alert
    setTimeout( () => {
      alert.textContent = "";
      alert.className = "";
    }, 1000);
};

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");

    items.forEach(item => list.removeChild(item));

    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
};

//delete item
function deleteItem(e) {
    const element = e.currentTarget.closest('.grocery-item')
    const id = element.dataset.id;
  
    list.removeChild(element);
    if (!list.children.length) container.classList.remove("show-container");

    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
};

// edit item
function editItem(e) {
    const element = e.currentTarget.closest('.grocery-item');
    // set edit item
    editElement = element.querySelector('.grocery-title');
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
};

// set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

//*** local storage***/

//add to local storage
function addToLocalStorage(id, value) {
    const items = [...getLocalStorage(), { id, value }];
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("list")) || [];
}

function removeFromLocalStorage(id) {
    const items = getLocalStorage().filter(item => item.id !== id);  
    localStorage.setItem("list", JSON.stringify(items));
};

function editLocalStorage(id, value) {
    const items = getLocalStorage().map( item => item.id === id ? { ...item, value } : item);

    localStorage.setItem("list", JSON.stringify(items));
}

// localStorage.removeItem('list');

// ****** setup items **********

function setupItems() {
    const items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(item => createListItem(item.id, item.value));
        container.classList.add("show-container");
    }
}

function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add("show-container");
    }
  }
  
  function createListItem(id, value) {
    const element = document.createElement("article");
    element.setAttribute("data-id", id);
    element.classList.add("grocery-item");
    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    // add event listeners to both buttons;
    // add event listeners to both buttons
    element.querySelector(".delete-btn").addEventListener("click", deleteItem);
    element.querySelector(".edit-btn").addEventListener("click", editItem);

    // append child
    list.appendChild(element);
}