import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ListContacts from "./ListContacts/ListContacts";
import { useCallback } from "react";
import { Button } from "./Button/Button";
import { logout } from 'components/login/thunk'
import { useDispatch } from "react-redux";



export default function UserPage() {
    const dispatch = useDispatch()
    return (
        < div className="App" >
                <h3>Phonebook</h3>
                <Form />
                <Button onClick={() => {
                    dispatch(logout())
                }} buttonName='Logout' />
                <h3>Contacts</h3>
                <p>filter via name</p>
                <Filter />
                <ListContacts />

        </div >)
}