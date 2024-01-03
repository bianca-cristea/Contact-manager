import express from 'express';
import {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from '../controller/contactController.js';

const router = express.Router();

router.route('/').get(getAllContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

export default router;
