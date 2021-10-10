import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ListContacts from "./ListContacts/ListContacts";

export default function UserPage() {
    return (
        < div className="App" >
            <h3>Phonebook</h3>
            <Form />
            <h3>Contacts</h3>
            <p>filter via name</p>
            <Filter />
            <ListContacts />
        </div >)
}