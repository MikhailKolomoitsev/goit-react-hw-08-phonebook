import React, { useState } from 'react'
import { connect } from 'react-redux'
import {addContact} from 'redux/operations'

 function Form({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const handleNameChange = (e) => setName(e.currentTarget.value)
  const handleNumberChange = (e) => setNumber(e.currentTarget.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, number })
    setName('')
    setNumber('')
  }
  return (
    <form type="submit" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  )
}
const mapDispatchToProrps = (dispatch) => ({
  onSubmit: (obj) => dispatch(addContact(obj)),
})
export default connect(null, mapDispatchToProrps)(Form)