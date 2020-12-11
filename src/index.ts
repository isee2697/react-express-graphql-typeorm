import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

import { getApolloServer } from './apollo-server';

const main = async () => {
  await createConnection();

  const server = await getApolloServer();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
  console.log('Server has started!');
};

main();
