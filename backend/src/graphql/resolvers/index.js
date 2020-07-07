const path = require("path");
const mergeGraphQLSchemas = require("merge-graphql-schemas");

const files = path.join(__dirname, "./");
const { fileLoader } = mergeGraphQLSchemas;

module.exports = fileLoader(files);
