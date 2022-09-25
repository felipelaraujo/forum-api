import type {Express, Request, Response} from 'express';

export function configRoutes(server: Express) {
	server.post('/post', (req: Request, res: Response) => {
		res.send({
			message: 'post',
		});
	});

	server.post('post/comment/:id', (req: Request, res: Response) => {
		res.send({
			message: `comment post id: ${req.params.id}`,
		});
	});

	server.post('comment/reply/:id', (req: Request, res: Response) => {
		res.send({
			message: `reply comment id: ${req.params.id}`,
		});
	});

	server.patch('post/upvote/:id', (req: Request, res: Response) => {
		res.send({
			message: `upvote post id: ${req.params.id}`,
		});
	});

	server.patch('comment/upvote/:id', (req: Request, res: Response) => {
		res.send({
			message: `upvote comment id: ${req.params.id}`,
		});
	});

	server.patch('reply/upvote/:id', (req: Request, res: Response) => {
		res.send({
			message: `upvote reply id: ${req.params.id}`,
		});
	});
}
