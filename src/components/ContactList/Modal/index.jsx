import { Form } from "../Form";

export const Modal = ({ closeModal, setData, data }) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <h2>Agregar Contacto</h2>
        <Form setData={setData} data={data} />
      </div>
    </div>
  );
};
