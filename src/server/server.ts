import type {Express} from 'express';
import express from 'express';

export function startServer(): Express {
	const app = express();

	app.use(express.json());

	app.listen(process.env.PORT, () => {
		console.log(`[INFO] App running at http://localhost:${process.env.PORT!}`);
	});

	return app;
}
