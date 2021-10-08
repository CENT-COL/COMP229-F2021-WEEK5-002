import express from 'express';
import { DisplayContactEditPage, DisplayContactListPage } from '../../controllers/business_contact/contact';

const router = express.Router();


// GET localhost/contact/list
router.get('/list', DisplayContactListPage);


// GET localhost/contact/edit
router.get('/edit/:id', DisplayContactEditPage);


// POST localhost/contact/edit

export default router;