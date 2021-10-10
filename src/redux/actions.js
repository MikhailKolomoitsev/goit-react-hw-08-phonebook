import { createAction } from "@reduxjs/toolkit"

export const changeFilter=createAction('contacts/changeFilter')

export const AddContactRequest=createAction('contacts/AddContactRequest')
export const addContactSuccess=createAction('contacts/addContactSuccess')
export const addContactError=createAction('contacts/addContactError')

export const deleteContactRequest=createAction('contacts/deleteContactRequest')
export const deleteContactSuccess=createAction('contacts/deleteContactSuccess')
export const deleteContactError=createAction('contacts/deleteContactError')