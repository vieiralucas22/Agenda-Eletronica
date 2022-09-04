let name_contact = document.getElementById("name");
let phone_contact = document.getElementById("phone");
let id_contact = document.getElementById("id");
let contacts_area = document.querySelector("#contacts-area");
let search_contact = document.querySelector("#search-contact");
let arrayContacts = [];
let ordemAlfabetica = [];
let arrayId = [];

function createContact(index) {
  contacts_area.innerHTML += `<section class="contact-section" id="contact-section">
  <div class="text-section" id="text-section">
    <p id="contact-id">${arrayContacts[index].id}</p>
    <p id="contact-name">${arrayContacts[index].name}</p>
    <p id="contact-phone">${arrayContacts[index].phone}</p>
  </div>

  <button
    onclick="removeContact(${index})"
    id="section-button"
    class="section-button btn btn-outline-danger"
  >
    <img
      id="btn-img"
      class="btn-img"
      src="./IMGS/images-removebg-preview (1).png"
      alt=""
    />
  </button>
</section>`;
}

function sortContacts() {
  for (let index = 0; index < arrayContacts.length; index++) {
    ordemAlfabetica.push(arrayContacts[index].name);
  }
  ordemAlfabetica.sort();
  contacts_area.innerHTML = "";
  for (let index = 0; index < arrayContacts.length; index++) {
    for (let index2 = 0; index2 < arrayContacts.length; index2++) {
      if (ordemAlfabetica[index] == arrayContacts[index2].name) {
        createContact(index2);
      }
    }
  }
  for (let index = 0; index < arrayContacts.length; index++) {
    ordemAlfabetica.pop();
  }
}

function search() {
  for (let index = 0; index < arrayContacts.length; index++) {
    if (
      search_contact.value == arrayContacts[index].id ||
      search_contact.value == arrayContacts[index].name ||
      search_contact.value == arrayContacts[index].phone
    ) {
      contacts_area.innerHTML = `<section class="contact-section" id="contact-section">
      <div class="text-section" id="text-section">
        <p id="contact-id">${arrayContacts[index].id}</p>
        <p id="contact-name">${arrayContacts[index].name}</p>
        <p id="contact-phone">${arrayContacts[index].phone}</p>
      </div>
    
      <button
        onclick="removeContact(${index})"
        id="section-button"
        class="section-button btn btn-outline-danger"
      >
        <img
          id="btn-img"
          class="btn-img"
          src="./IMGS/images-removebg-preview (1).png"
          alt=""
        />
      </button>
    </section>`;
    }
  }
}

function removeContact(posDelete) {
  arrayContacts.splice(posDelete, 1);
  Atualizar();
}

function Atualizar() {
  contacts_area.innerHTML = "";
  for (let index = 0; index < arrayContacts.length; index++) {
    createContact(index);
  }
}

function resetFields() {
  name_contact.value = "";
  phone_contact.value = "";
  id_contact.value = "";
}

function addContact() {
  if (
    name_contact.value == "" ||
    phone_contact.value == "" ||
    id_contact.value == ""
  ) {
    alert("Preencha todos os campos!");
  } else if (phone_contact.value.length < 9) {
    alert("Informe um número de pelo menos 9 caracteres!");
  } else {
    let newName =
      name_contact.value[0].toUpperCase() + name_contact.value.substring(1);
    let contacts = {
      name: newName,
      phone: phone_contact.value,
      id: id_contact.value,
    };
    arrayId.push(id_contact.value);
    arrayContacts.push(contacts);
    resetFields();
    Atualizar();
  }
}
