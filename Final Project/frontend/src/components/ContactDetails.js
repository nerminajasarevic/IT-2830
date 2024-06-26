import { useContactsContext } from "../hooks/useContactContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ContactDetails = ({ contact }) => {
    const { dispatch } = useContactsContext()

    const handleClick = async () => {
        const response = await fetch('/api/contacts/' + contact._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CONTACT', payload: json})
        }
    }

    return (
        <div className= "contact-details">
            <h4>{contact.name}</h4>
            <p><strong>Age: </strong>{contact.age}</p>
            <p><strong>Address: </strong>{contact.address}</p>
            <p>{formatDistanceToNow(new Date(contact.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ContactDetails