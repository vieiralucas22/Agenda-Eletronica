let name_contact = document.getElementById("name");
let phone_contact = document.getElementById("phone");
let id_contact = document.getElementById("id");
let contacts_area = document.getElementById("contacts-area");
let arrayContacts = [];

function printConstactArea(arrayContacts) {
  contacts_area += arrayContacts;
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
    printConstactArea(arrayContacts);
  }
}
