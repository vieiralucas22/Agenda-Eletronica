let arrayContacts = [];
let name_contact = document.getElementById("name");
let phone_contact = document.getElementById("phone");
let id_contact = document.getElementById("id");
let contacts_area = document.querySelector("#contacts-area");

function removeContact() {}

function Atualizar() {
  let tam = arrayContacts.length;

  contacts_area.innerHTML += `<section class="contact-section" id="contact-section">
  <div class="text-section" id="text-section">
    <p id="contact-id">${arrayContacts[tam - 1].id}</p>
    <p id="contact-name">${arrayContacts[tam - 1].name}</p>
    <p id="contact-phone">${arrayContacts[tam - 1].phone}</p>
  </div>

  <button
    onclick="removeContact()"
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
