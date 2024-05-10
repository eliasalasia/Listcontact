export const ListItem = ({name, email, phone}) =>{
    return(
        <li className="contact">
            <span className="name">{name}</span>
            <span className="details">{email} - {phone}</span>
        </li>
    )
}