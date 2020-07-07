require("dotenv/config");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/schemas");

module.exports = new GraphQLServer({ typeDefs, resolvers });
