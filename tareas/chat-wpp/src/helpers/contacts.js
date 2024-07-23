import { DATA_CONTACTS as contacts } from "../data/contactsData";

// export const getContactById = (id) => {
//     return contacts.find((contact) => Number(contact.id) === Number(id));
// };

export const saveContactsToLocalStorage = (contacts) => {
    const contactsJSON = JSON.stringify(contacts);
    localStorage.setItem("contacts", contactsJSON);
};

export const getContacts = () => {
    const saved_contacts = localStorage.getItem("contacts");
    if (saved_contacts) {
        return JSON.parse(saved_contacts);
    } else {
        saveContactsToLocalStorage(contacts);
        return contacts;
    }
};

export const createContact = (contact) => {
    const newContacts = getContacts();
    newContacts.push(contact);
    saveContactsToLocalStorage(newContacts);
};

export const deleteContactById = (idContact) => {
    const contactList = getContacts();
    const newContactList = contactList.filter(
        (contact) => Number(contact.id) !== Number(idContact)
    );
    saveContactsToLocalStorage(newContactList);
};

export const getContactById = (idContact) => {
    const contactList = getContacts();
    if (contactList) {
        return contactList.find(
            (contact) => Number(contact.id) === Number(idContact)
        );
    } else {
        return null;
    }
};

export const saveMessage = (idContact, newMessage) => {
    const contactList = getContacts();
    const contactIndex = contactList.findIndex(
        (contact) => Number(contact.id) === Number(idContact)
    );
    contactList[contactIndex].messages.push(newMessage);
    saveContactsToLocalStorage(contactList);
};
