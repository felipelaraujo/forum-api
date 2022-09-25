import {startServer} from './server/server';
import {configRoutes} from './server/router/routes';

function startApp() {
	const server = startServer();
	configRoutes(server);
}

startApp();

