const Contact = require('../models/contactModel')
const mongoose = require('mongoose')

const getContacts = async (req, res) => {
    const contacts = await Contact.find({}).sort({createdAt: -1})

    res.status(200).json(contacts)
}

const getContact = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findById(id)

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)
}

const createContact = async (req, res) => {
    const {name, age, address} = req.body

    let emptyFields = []

    if (!name) {
        emptyFields.push('name')
    }
    if (!age) {
        emptyFields.push('age')
    }
    if(!address) {
        emptyFields.push('address')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const contact = await Contact.create({name, age, address})
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteContact = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findOneAndDelete({_id: id})

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)
}

const updateContact = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)

}

module.exports = {
    getContacts,
    getContact,
    createContact,
    deleteContact,
    updateContact
}