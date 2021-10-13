import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ListContacts from "./ListContacts/ListContacts";
import { useCallback } from "react";
import { Button } from "./Button/Button";

export default function UserPage() {
    const logout = useCallback(() => console.log('logout clicked'), [])
    return (
        < div className="App" >
            <h3>Phonebook</h3>
            <Form />
            <Button onClick={logout} buttonName='Logout' />
            <h3>Contacts</h3>
            <p>filter via name</p>
            <Filter />
            <ListContacts />
        </div >)
}