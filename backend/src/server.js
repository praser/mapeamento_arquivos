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

module.exports = new GraphQLServer({ typeDefs, resolvers });
