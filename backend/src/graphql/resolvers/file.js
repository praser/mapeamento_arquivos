const { DateTimeResolver } = require("graphql-scalars")
const { Directory, Checksum, File } = require("../../app/models")

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    files: async (_, { page, pageSize }) => {
      const offset = (page - 1) * pageSize
      const limit = pageSize
      console.log(offset, limit)
      return File.findAll({
        offset,
        limit,
        include: [
          { model: Directory, required: true },
          { model: Checksum, required: true },
        ],
      })
    },
    file: async (_, { id }) => File.findByPk(id),
    filesCount: async () => File.count(),
  },
}
