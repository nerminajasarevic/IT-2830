import { useState } from "react"
import { useContactsContext } from "../hooks/useContactContext"

const ContactForm = () => {
    const { dispatch } = useContactsContext()

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const contact = {name, age, address}

        const response = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setName('')
            setAge('')
            setAddress('')
            setError(null)
            setEmptyFields([])
            console.log('new contact added', json)
            dispatch({type: 'CREATE_CONTACT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <div class="form-group">
            <h3>Add a new Contact</h3>

            <label>Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />
            </div>
            <div class="form-group">
            <label>Age:</label>
            <input 
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                className={emptyFields.includes('age') ? 'error' : ''}
            />
            </div>
            <div class="form-group">
            <label>Address:</label>
            <input 
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
            />
            </div>
            <button>Add Contact</button>
            {error && <div className = "error">{error}</div>}
        </form>
    )
}

export default ContactForm