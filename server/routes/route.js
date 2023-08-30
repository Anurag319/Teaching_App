import express from 'express';
import { userLogin, userSignup } from '../Controller/user-controller';
import { quizz, quizpost } from '../Controller/quiz-controller';


const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/students/:username', quizz);
router.post('/students', quizpost);

export default router;

