const { DateTimeResolver } = require("graphql-scalars");
const { Directory, Error, File } = require("../../app/models");

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    directories: async () =>
      Directory.findAll({
        include: [{ model: File }, { model: Error }],
      }),
    directory: async (_, { id }) =>
      Directory.findByPk(id, {
        include: [{ model: File }, { model: Error }],
      }),
  },
};
