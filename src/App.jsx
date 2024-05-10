import { useState } from "react";
import { ContactList } from "./components/ContactList";
import { Modal } from "./components/ContactList/Modal";
import "./index.css";

function App() {
  const defaultContactList = [
    {
      id: 1,
      name: "Enzo Lucas",
      email: "el@rmail.com",
      phone: "721-411-2024",
    },
    {
      id: 2,
      name: "Jose Empresas",
      email: "je@rmail.com",
      phone: "829-411-2024",
    },
  ];
  const [data, setData] = useState(defaultContactList);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container">
        <h1>Lista de Contactos</h1>
        <ContactList data={data} />
        <button id="addContactBtn" onClick={() => setIsOpen(true)}>
          +
        </button>
      </div>
      {isOpen && (
        <Modal
          closeModal={() => setIsOpen(false)}
          setData={setData}
          data={data}
        />
      )}
    </>
  );
}

export default App;
