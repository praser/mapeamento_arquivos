const { DateTimeResolver } = require("graphql-scalars");
const { UserFile, File } = require("../../app/models");

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    userFiles: async () =>
    UserFile.findAll({
      include: [{ model: File }],
    }),
    userFile: async (_, { id }) =>
    UserFile.findByPk(id, {
      include: [{ model: File }],
    }),
  },
  Mutation: {
    createUserFile: async (_, {userId, fileId}) => UserFile.create({ userId, fileId })
  }
};
