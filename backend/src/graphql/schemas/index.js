const path = require("path");
const mergeGraphQLSchemas = require("merge-graphql-schemas");

const files = path.join(__dirname, "./");

const { fileLoader, mergeTypes } = mergeGraphQLSchemas;

const loadedFiles = fileLoader(files);

module.exports = mergeTypes(loadedFiles);
