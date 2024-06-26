import { useEffect } from 'react'
import { useContactsContext } from "../hooks/useContactContext"

import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

const Home = () => {
    const {contacts, dispatch} = useContactsContext()

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch('/api/contacts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CONTACTS', payload: json})
            }
        }

        fetchContacts()
    }, [dispatch])

    return (
        <div className="home">
            <div classNames="contacts">
                {contacts && contacts.map((contact) => (
                    <ContactDetails key={contact._id} contact={contact}/>
                ))}
            </div>
            <ContactForm />
        </div>
    )
}

export default Home