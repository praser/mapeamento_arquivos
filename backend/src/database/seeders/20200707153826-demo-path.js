const path = require("path");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("Directories", [
      {
        path: "/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        path: "/var",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const directories = await queryInterface.sequelize.query(
      "SELECT id, path FROM Directories"
    );

    await queryInterface.bulkInsert("Checksums", [
      {
        md5: "md5hash0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        md5: "md5hash1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        md5: "md5hash2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        md5: "md5hash3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const checksums = await queryInterface.sequelize.query(
      "SELECT id FROM Checksums"
    );

    await queryInterface.bulkInsert("Files", [
      {
        directoryId: directories[0][0].id,
        checksumId: checksums[0][0].id,
        fullName: path.join(directories[0][0].path, "arquivo.xls"),
        directoryName: directories[0][0].path,
        name: "arquivo.xls",
        extension: ".xls",
        length: 1024,
        creationTime: new Date(),
        lastAccessTime: new Date(),
        lastWriteTime: new Date(),
        lastOccurrenceTime: new Date(),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][0].id,
        checksumId: checksums[0][1].id,
        fullName: path.join(directories[0][0].path, "arquivo_1.xls"),
        directoryName: directories[0][0].path,
        name: "arquivo_1.xls",
        extension: ".xls",
        length: 1024,
        creationTime: new Date(),
        lastAccessTime: new Date(),
        lastWriteTime: new Date(),
        lastOccurrenceTime: new Date(),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][1].id,
        checksumId: checksums[0][2].id,
        fullName: path.join(directories[0][1].path, "arquivo_2.xls"),
        directoryName: directories[0][1].path,
        name: "arquivo_2.xls",
        extension: ".xls",
        length: 1024,
        creationTime: new Date(),
        lastAccessTime: new Date(),
        lastWriteTime: new Date(),
        lastOccurrenceTime: new Date(),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][1].id,
        checksumId: checksums[0][3].id,
        fullName: path.join(directories[0][1].path, "arquivo_3.xls"),
        directoryName: directories[0][1].path,
        name: "arquivo_3.xls",
        extension: ".xls",
        length: 1024,
        creationTime: new Date(),
        lastAccessTime: new Date(),
        lastWriteTime: new Date(),
        lastOccurrenceTime: new Date(),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][1].id,
        checksumId: checksums[0][2].id,
        fullName: path.join(directories[0][1].path, "arquivo_4.xls"),
        directoryName: directories[0][1].path,
        name: "arquivo_4.xls",
        extension: ".xls",
        length: 1024,
        creationTime: new Date(),
        lastAccessTime: new Date(),
        lastWriteTime: new Date(),
        lastOccurrenceTime: new Date(),
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Errors", [
      {
        directoryId: directories[0][0].id,
        fullName: path.join(directories[0][0].path, "arquivo_erro.xls"),
        description: "Um erro qualquer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][0].id,
        fullName: path.join(directories[0][0].path, "arquivo_erro_1.xls"),
        description: "Um erro qualquer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][0].id,
        fullName: path.join(directories[0][0].path, "arquivo_erro_2.xls"),
        description: "Um erro qualquer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        directoryId: directories[0][1].id,
        fullName: path.join(directories[0][1].path, "arquivo_erro_3.xls"),
        description: "Um erro qualquer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Directories", null, {});
    await queryInterface.bulkDelete("Checksums", null, {});
  },
};
