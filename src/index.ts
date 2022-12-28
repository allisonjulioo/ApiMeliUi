import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { config } from 'dotenv';
import { APOLLO_CONFIG } from './base';

config();

const server = new ApolloServer(APOLLO_CONFIG);

const port = 4000 || Number(process.env.PORT);

startStandaloneServer(server, {
  listen: {port},
})
  .then(({url}) => {
    console.info(`🚀 Server ready at ${url}`);
  })
  .catch(e => {
    console.error('Something went wrong while starting server', e);
  });
