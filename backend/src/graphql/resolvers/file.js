const { DateTimeResolver } = require("graphql-scalars");
const { Directory, Checksum, File } = require("../../app/models");

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    files: async () =>
      File.findAll({
        include: [
          { model: Directory, required: true },
          { model: Checksum, required: true },
        ],
      }),
    file: async (_, { id }) => File.findByPk(id),
  },
};
