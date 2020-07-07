const { DateTimeResolver } = require("graphql-scalars");
const { Directory, Error } = require("../../app/models");

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    errors: async () => Error.findAll({ include: Directory, required: true }),
    error: async (_, { id }) =>
      Error.findByPk(id, { include: Directory, required: true }),
  },
};
