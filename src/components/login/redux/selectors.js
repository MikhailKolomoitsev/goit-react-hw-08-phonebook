import { createSelector } from "reselect"

export const getContacts= ({contacts}) => contacts.entities
export const getFilter= ({filter}) => filter

export const getFilteredContacts= createSelector(
    [getFilter, getContacts],
    (filter, contacts)=>{
        if(filter){
            const normalizedFilter=filter.toLowerCase()
            return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
        }
        return contacts
    }
)