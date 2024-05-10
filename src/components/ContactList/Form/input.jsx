export const Input = ({id, label, type, value, handleChanges}) =>{
    return (
        <>
         <label for={id}>{label}</label>
            <input type={type} id={id} name={id} required value={value} onChange={handleChanges}/>
        </>
    )
}