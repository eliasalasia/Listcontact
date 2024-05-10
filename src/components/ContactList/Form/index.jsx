import { useEffect, useState } from "react"
import { Input } from "./input"

export const Form = ({setData, data, closeModal}) => {
    const emptyContact = {id: 0, name: '', email: '', phone:''}
    const [newContact, setNewContact] = useState(emptyContact)

   
    const handleSubmit = (e) =>{
        e.preventDefault()

        setData([...data, newContact])
        setNewContact(emptyContact)
        closeModal()
    }
    const handleChanges =(e)=>{
        setNewContact({...newContact, [e.target.name]: e.target.value})
    }
    return(
        <form id="contactForm" onSubmit={handleSubmit}>
           
           <Input id="name" label="nombre" type="text" value={newContact?.name} handleChanges={handleChanges}/> 
           <Input id="email" label="Correo" type="email"value={newContact?.email} handleChanges={{handleChanges}}/> 
           <Input id="phone" label="Telefono" type="tel"value={newContact?.phone} handleChanges={{handleChanges}}/> 
            <button type="submit">Agregar</button>
        </form>
    )
}