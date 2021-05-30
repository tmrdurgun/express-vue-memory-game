import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import MemoryController from './MemoryController';

const memoryController = new MemoryController();

const router = Router();
const path = '';


router.post('/memory/getRandomNumbers', async (req: Request, res: Response) => {
	try {
		const options = req.body;

		const randNumbersList = await memoryController.genRandNumbersList(options.size);

		return res.status(OK).json({ success: true, data: randNumbersList });
	} catch (err) {
		logger.error(err.message, err);
		return res.status(BAD_REQUEST).json({
			error: err.message,
		});
	}
});

export default { router, path };
