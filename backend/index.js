const server = require("./src/server");

const port = process.env.PORT || 4000;
const endpoint = process.env.ENDPOINT || '/';
const subscriptions = process.env.SUBSCRIPTIONS || '/';
const playground = (() => {
    if (process.env.PLAYGROUND) {
        return process.env.PLAYGROUND === 'false' ? false : process.env.PLAYGROUND
    }
    return "/"
})();

server.start({port, endpoint, subscriptions, playground}, ({port}) => {
  console.log(`Server is running on localhost:${port}`)
});
