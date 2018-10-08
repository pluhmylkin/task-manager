import koa from 'koa';
import koaRouter from 'koa-router';
import cors from 'koa-cors';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';

import taskSchema from './schema/task';
import config from './helpers/config';

const app = new koa();
const router = new koaRouter();
const PORT = config.get('port');

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
    console.log(`Server listens http://${config.get('port')}:${PORT} ` + new Date());
  });
