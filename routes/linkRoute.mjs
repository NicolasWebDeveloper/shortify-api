import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import * as linkController from '../controllers/linkController.mjs';

const router = Router();

const limiter = rateLimit({
  windowMs: 1000 * 60 * 60,
  max: 10,
  message: 'You can only create 10 links per hour!'
});

router.post('/', limiter, linkController.createLink);
router.get('/:link', linkController.redirectToLink);

export default router;
