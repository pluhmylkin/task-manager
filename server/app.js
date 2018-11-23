import Koa from 'koa';
import KoaRouter from 'koa-router';
import cors from 'koa-cors';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';

import taskSchema from './schema/task';
import config from './helpers/config';
import createLogger from './helpers/logger';

const app = new Koa();
const router = new KoaRouter();
const PORT = config.get('port');
const logger = createLogger('server');

router
  .get('/graphql', graphqlKoa({ schema: taskSchema }))
  .post('/graphql', graphqlKoa({ schema: taskSchema }))
  .get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app
  .use(koaBody())
  .use(cors({ origin: '*' }))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, () => {
    logger.info(`Server listens http://${config.get('port')}:${PORT} ${new Date()}`);
  });
