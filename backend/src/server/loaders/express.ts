import { Application } from 'express';
import cors from 'cors';

import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';

import { Config } from '../../config';

export default async (app: Application, { isDev, sessionSecret }: Config) => {
  app.use(cors());
  app.use(sessionMiddleware());

  function sessionMiddleware() {
    const RedisStore = connectRedis(session);
    return session({
      store: new RedisStore({
        client: new Redis(),
      }),
      name: 'qid',
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: !isDev,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      },
    });
  }
};
