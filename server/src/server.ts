import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import graphQlSchema from './graphql';
import cors from 'cors';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use(
      '/graphql',
      graphqlHTTP({
        schema: graphQlSchema,
        graphiql: true,
      })
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server listening on port: ' + this.port);
    });
  }
}

export default Server;
