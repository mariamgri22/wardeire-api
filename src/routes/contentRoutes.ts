import express from 'express';
import {
  getAllContent,
  createContent,
} from '../controllers/contentController';

const router = express.Router();

router.get('/contents', getAllContent);
router.post('/content', createContent);


export default router;
