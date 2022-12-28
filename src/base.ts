import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const APOLLO_CONFIG = {
  typeDefs,
  resolvers,
  context: async (context: any) => ({
    ...context,
  }),
};

export { APOLLO_CONFIG };

