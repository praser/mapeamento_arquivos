require("dotenv/config");
const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
};

const options = {
  port: process.env.PORT || 3000,
  endpoint: process.env.ENTRYPOINT || "/",
  subscriptions: process.env.ENTRYPOINT || "/",
  playground: process.env.ENTRYPOINT || "/",
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
);
