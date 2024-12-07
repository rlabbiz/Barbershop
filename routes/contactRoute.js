import express from 'express';
import {
    createContact,
    getAllContacts,
    getSingleContact,
    updateSingleContact,
    deleteSingleContact
} from '../controllers/contactController.js';

export const router = express.Router()

router.route('/')
    .get(getAllContacts)
    .post(createContact)

router.route('/:id')
    .get(getSingleContact)
    .put(updateSingleContact)
    .delete(deleteSingleContact)

