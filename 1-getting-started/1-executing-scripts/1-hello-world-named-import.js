// module management when using common JS module
const { createServer } = require("http");

// run with: node 1-hello-world.js
const server = createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
