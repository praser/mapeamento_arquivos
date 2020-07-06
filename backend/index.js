const server = require("./src/server");

const options = {
  port: process.env.PORT || 3000,
  endpoint: process.env.ENTRYPOINT || "/",
  subscriptions: process.env.ENTRYPOINT || "/",
  playground: process.env.ENTRYPOINT || "/",
};

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
);
