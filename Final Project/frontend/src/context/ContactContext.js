import { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

export const ContactsContext = createContext()

export const contactsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTACT':
            return {
                contacts: action.payload
            }
        case 'CREATE_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            }
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ContactsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactsReducer, {
        contacts: []
    })

    useEffect(() => {
        axios.get('/api/contacts').then((response) => {
          dispatch({ type: 'SET_CONTACT', payload: response.data });
        });
      }, []);

    return (
        <ContactsContext.Provider value={{...state, dispatch}}>
            { children }
        </ContactsContext.Provider>
    )
}