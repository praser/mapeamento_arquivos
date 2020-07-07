const { DateTimeResolver } = require("graphql-scalars");
const { Checksum, File } = require("../../app/models");

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    checksums: async () => Checksum.findAll({ include: File }),
    checksum: async (_, { id }) => Checksum.findByPk(id, { include: File }),
  },
};
