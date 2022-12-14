// named import to not import whole http object, but only what the script uses
const { createServer } = require("http");

// run with: node 1-hello-world.js
const server = createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
