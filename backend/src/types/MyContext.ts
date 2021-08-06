import { Session } from 'express-session';
import { Response } from 'express';

interface MySession extends Session {
  userId: string;
}

export interface MyContext {
  res: Response;
  session: MySession;
}
