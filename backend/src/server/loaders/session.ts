import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import { Config } from '../../config';

export default async ({ isDev, sessionSecret }: Config) => {
  const redis = new Redis();
  const RedisStore = connectRedis(session);
  return session({
    store: new RedisStore({
      client: redis,
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
};
