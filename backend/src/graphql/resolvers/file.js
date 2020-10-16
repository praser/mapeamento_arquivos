const { Op } = require("sequelize")

const { DateTimeResolver } = require("graphql-scalars")
const { Directory, Checksum, File } = require("../../app/models")

module.exports = {
  DateTime: DateTimeResolver,
  Query: {
    files: async (_, { page, pageSize, query }) => {
      const offset = (page - 1) * pageSize
      const limit = pageSize
      const where = query
        ? {
            fullName: { [Op.like]: `%${query}%` },
          }
        : {}

      return File.findAll({
        offset,
        limit,
        where,
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
