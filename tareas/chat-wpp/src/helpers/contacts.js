import { DATA_CONTACTS as contacts } from "../data/contactsData";
export const getContactById = (id) => {
    return contacts.find((contact) => Number(contact.id) === Number(id));
};
