import { Request, Response } from 'express';
import { Session } from 'express-session';

interface MySession extends Session {
  userId: string;
}

interface MyRequest extends Request {
  session: MySession;
}

export interface MyContext {
  req: MyRequest;
  res: Response;
}
