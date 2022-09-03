let arrayContacts = [];
let name_contact = document.getElementById("name");
let phone_contact = document.getElementById("phone");
let id_contact = document.getElementById("id");
let contacts_area = document.querySelector("#contacts-area");
let contact_section = document.querySelector("#contact-section");
let search_contact = document.querySelector("#search-contact");

function sortContacts() {
  let tam = arrayContacts.length;
  for (let index = 0; index < tam; index++) {}
}

function search() {
  let tam = arrayContacts.length;
  for (let index = 0; index < tam; index++) {
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
  let tam = arrayContacts.length;
  for (let index = 0; index < tam; index++) {
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
  } else {
    let contacts = {
      name: name_contact.value,
      phone: phone_contact.value,
      id: id_contact.value,
    };
    arrayContacts.push(contacts);
    resetFields();
    Atualizar();
  }
}
